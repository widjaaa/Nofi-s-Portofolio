import React, { useEffect, useRef, useState } from 'react';

const CursorGlow = () => {
    const canvasRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const mouseRef = useRef({ x: -100, y: -100, active: false });
    const pointsRef = useRef([]); // Holds historical coordinates for the trail

    // Keep track of theme shifts
    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Only show on devices with fine pointer (desktop/laptop)
        const hasPointer = window.matchMedia('(pointer: fine)').matches;
        setIsDesktop(hasPointer);
        if (!hasPointer) return;

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.active = true;
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let lastFrameTime = 0;
        const FRAME_INTERVAL = 33; // ~30fps (1000/30 ≈ 33ms)

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const animate = (timestamp) => {
            animationFrameId = requestAnimationFrame(animate);

            // Skip if tab is hidden or throttle to ~30fps
            if (document.hidden) return;
            if (timestamp - lastFrameTime < FRAME_INTERVAL) return;
            lastFrameTime = timestamp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isCurrentDark = document.documentElement.classList.contains('dark');

            // Add current position to points trail if mouse is active
            if (mouseRef.current.active) {
                pointsRef.current.push({
                    x: mouseRef.current.x,
                    y: mouseRef.current.y
                });
            }

            // Limit trail length to 20 coordinates
            if (pointsRef.current.length > 20) {
                pointsRef.current.shift();
            }

            // Draw comet trail (only if we have moving history)
            if (pointsRef.current.length > 1) {
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                // Configure colors based on theme (using the site's exact blue colors)
                const coreStroke = isCurrentDark ? 'rgba(255, 255, 255, ' : 'rgba(59, 130, 246, '; // White for dark, Brand Blue (#3b82f6) for light
                const glowStroke = isCurrentDark ? 'rgba(96, 165, 250, ' : 'rgba(147, 197, 253, '; // Sky blue for dark, Soft Blue (#93c5fd) for light
                
                ctx.shadowBlur = isCurrentDark ? 10 : 3;
                ctx.shadowColor = isCurrentDark ? 'rgba(96, 165, 250, 0.4)' : 'rgba(59, 130, 246, 0.15)';

                // 1. Draw outer blue glow trail
                for (let i = 0; i < pointsRef.current.length - 1; i++) {
                    const p1 = pointsRef.current[i];
                    const p2 = pointsRef.current[i + 1];
                    const ratio = i / pointsRef.current.length;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    // Reduced opacity for softer look in light mode
                    const opacityMultiplier = isCurrentDark ? 0.6 : 0.25;
                    ctx.strokeStyle = `${glowStroke}${ratio * opacityMultiplier})`;
                    ctx.lineWidth = ratio * (isCurrentDark ? 8 : 7);
                    ctx.stroke();
                }

                // 2. Draw inner core trail
                ctx.shadowBlur = isCurrentDark ? 4 : 1;
                ctx.shadowColor = isCurrentDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(59, 130, 246, 0.2)';
                for (let i = 0; i < pointsRef.current.length - 1; i++) {
                    const p1 = pointsRef.current[i];
                    const p2 = pointsRef.current[i + 1];
                    const ratio = i / pointsRef.current.length;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    // Reduced opacity for softer look in light mode
                    const opacityMultiplier = isCurrentDark ? 0.9 : 0.4;
                    ctx.strokeStyle = `${coreStroke}${ratio * opacityMultiplier})`;
                    ctx.lineWidth = ratio * 3; // Tapered core
                    ctx.stroke();
                }

                ctx.shadowBlur = 0; // Reset shadow
            }

            // 3. Draw ambient radial glow centered on head (250px size -> 125px radius)
            if (mouseRef.current.active) {
                const gradient = ctx.createRadialGradient(
                    mouseRef.current.x, mouseRef.current.y, 0,
                    mouseRef.current.x, mouseRef.current.y, 125
                );
                const glowOpacity = isCurrentDark ? 0.15 : 0.05; // Softer 5% opacity for light mode
                const colorPrimary = isCurrentDark ? '96, 165, 250' : '59, 130, 246'; // Sky Blue (#60a5fa) for dark, Brand Blue (#3b82f6) for light
                const colorSecondary = isCurrentDark ? '30, 58, 138' : '147, 197, 253'; // Navy for dark, Soft Blue for light

                gradient.addColorStop(0, `rgba(${colorPrimary}, ${glowOpacity})`);
                gradient.addColorStop(0.4, `rgba(${colorSecondary}, ${glowOpacity * 0.5})`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.beginPath();
                ctx.arc(mouseRef.current.x, mouseRef.current.y, 125, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            // Shrink trail if mouse stops moving or leaves window
            if (!mouseRef.current.active && pointsRef.current.length > 0) {
                pointsRef.current.shift();
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[45]"
            style={{ mixBlendMode: isDark ? 'screen' : 'normal' }}
        />
    );
};

export default CursorGlow;
