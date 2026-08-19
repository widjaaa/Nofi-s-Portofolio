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
        // Only show on devices with fine pointer and no reduced motion preference
        const hasPointer = window.matchMedia('(pointer: fine)').matches;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        setIsDesktop(hasPointer && !prefersReducedMotion);
        if (!hasPointer || prefersReducedMotion) return;

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
        const FRAME_INTERVAL = 33; // ~30fps

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

            // Limit trail length to 16 coordinates (subtler trail)
            if (pointsRef.current.length > 16) {
                pointsRef.current.shift();
            }

            // Draw comet trail (only if we have moving history)
            if (pointsRef.current.length > 1) {
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                // Warm Film Amber lens colors
                const coreStroke = isCurrentDark ? 'rgba(255, 255, 255, ' : 'rgba(217, 119, 6, ';
                const glowStroke = isCurrentDark ? 'rgba(251, 191, 36, ' : 'rgba(245, 158, 11, ';
                
                ctx.shadowBlur = isCurrentDark ? 8 : 2;
                ctx.shadowColor = isCurrentDark ? 'rgba(251, 191, 36, 0.35)' : 'rgba(217, 119, 6, 0.12)';

                // 1. Draw outer amber glow trail
                for (let i = 0; i < pointsRef.current.length - 1; i++) {
                    const p1 = pointsRef.current[i];
                    const p2 = pointsRef.current[i + 1];
                    const ratio = i / pointsRef.current.length;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    const opacityMultiplier = isCurrentDark ? 0.45 : 0.2;
                    ctx.strokeStyle = `${glowStroke}${ratio * opacityMultiplier})`;
                    ctx.lineWidth = ratio * (isCurrentDark ? 6 : 5);
                    ctx.stroke();
                }

                // 2. Draw inner core trail
                ctx.shadowBlur = isCurrentDark ? 3 : 1;
                ctx.shadowColor = isCurrentDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(217, 119, 6, 0.2)';
                for (let i = 0; i < pointsRef.current.length - 1; i++) {
                    const p1 = pointsRef.current[i];
                    const p2 = pointsRef.current[i + 1];
                    const ratio = i / pointsRef.current.length;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    const opacityMultiplier = isCurrentDark ? 0.85 : 0.35;
                    ctx.strokeStyle = `${coreStroke}${ratio * opacityMultiplier})`;
                    ctx.lineWidth = ratio * 2.5;
                    ctx.stroke();
                }

                ctx.shadowBlur = 0;
            }

            // 3. Draw ambient radial lens flare centered on cursor
            if (mouseRef.current.active) {
                const gradient = ctx.createRadialGradient(
                    mouseRef.current.x, mouseRef.current.y, 0,
                    mouseRef.current.x, mouseRef.current.y, 110
                );
                const glowOpacity = isCurrentDark ? 0.12 : 0.04;
                const colorPrimary = isCurrentDark ? '251, 191, 36' : '217, 119, 6';
                const colorSecondary = isCurrentDark ? '217, 119, 6' : '245, 158, 11';

                gradient.addColorStop(0, `rgba(${colorPrimary}, ${glowOpacity})`);
                gradient.addColorStop(0.4, `rgba(${colorSecondary}, ${glowOpacity * 0.4})`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.beginPath();
                ctx.arc(mouseRef.current.x, mouseRef.current.y, 110, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            // Shrink trail if mouse stops moving
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
