import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { Code2, FolderGit2, Award, Layers } from 'lucide-react';

const statsData = [
    { icon: Code2, value: 2, suffix: '+', label: 'Years Learning' },
    { icon: FolderGit2, value: 2, suffix: '+', label: 'Projects Built' },
    { icon: Award, value: 14, suffix: '+', label: 'Certifications' },
    { icon: Layers, value: 12, suffix: '+', label: 'Technologies' },
];

const useCountUp = (end, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0);
    const frameRef = useRef(null);

    useEffect(() => {
        if (!startCounting) return;
        
        let startTime = null;
        setCount(0);

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [end, duration, startCounting]);

    return count;
};

const StatItem = ({ icon: Icon, value, suffix, label, delay, isVisible }) => {
    const count = useCountUp(value, 2000, isVisible);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center text-center group"
        >
            <div className="w-14 h-14 rounded-2xl bg-[#1e3a8a]/5 dark:bg-[#60a5fa]/10 border border-[#1e3a8a]/15 dark:border-[#60a5fa]/15 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow dark:group-hover:shadow-none group-hover:bg-[#1e3a8a]/10 dark:group-hover:bg-[#60a5fa]/20">
                <Icon size={24} className="text-[#1e3a8a] dark:text-[#60a5fa]" />
            </div>
            <div className="font-heading text-4xl sm:text-5xl font-bold text-surface-900 dark:text-white mb-1 tabular-nums">
                {count}{suffix}
            </div>
            <div className="text-sm text-surface-500 dark:text-surface-400 font-medium">
                {label}
            </div>
        </motion.div>
    );
};

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 md:py-16 relative">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-50/50 to-transparent dark:via-surface-800/20 -z-10" />
            
            <div className="section-container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {statsData.map((stat, index) => (
                        <StatItem
                            key={stat.label}
                            {...stat}
                            delay={index * 0.1}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
