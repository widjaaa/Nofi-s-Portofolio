import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springX = useSpring(mouseX, { damping: 25, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 200 });

    useEffect(() => {
        // Only show on devices with fine pointer (desktop/laptop)
        const hasPointer = window.matchMedia('(pointer: fine)').matches;
        setIsDesktop(hasPointer);

        if (!hasPointer) return;

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    if (!isDesktop) return null;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[45]"
            aria-hidden="true"
        >
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] dark:opacity-[0.06]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, #1e3a8a 0%, transparent 70%)',
                }}
            />
        </motion.div>
    );
};

export default CursorGlow;
