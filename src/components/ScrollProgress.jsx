import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
            style={{
                scaleX,
                background: 'linear-gradient(90deg, #1e3a8a, #3b82f6, #60a5fa)',
            }}
        />
    );
};

export default ScrollProgress;
