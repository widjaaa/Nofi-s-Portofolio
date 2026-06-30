import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from '../utils/motion';
import { SiJavascript, SiTypescript, SiReact, SiLaravel, SiNodedotjs, SiTailwindcss, SiAdobepremierepro, SiCanva, SiAdobelightroom, SiGit, SiKalilinux } from 'react-icons/si';
import { Radar } from 'lucide-react';

const coreTechnologies = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Premiere Pro', icon: SiAdobepremierepro },
    { name: 'Canva', icon: SiCanva },
    { name: 'Lightroom', icon: SiAdobelightroom },
    { name: 'Git', icon: SiGit },
    { name: 'Kali Linux', icon: SiKalilinux },
    { name: 'Nmap', icon: Radar }
];

const AboutExperience = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationFrameId;
        let isHovered = false;
        let isMouseDown = false;
        let startX;
        let scrollLeft;

        const scrollSpeed = 0.6; // Kecepatan auto-scroll

        const autoScroll = () => {
            if (!isHovered && !isMouseDown) {
                el.scrollLeft += scrollSpeed;
                
                // seamless loop back
                const halfWidth = el.scrollWidth / 2;
                if (el.scrollLeft >= halfWidth) {
                    el.scrollLeft -= halfWidth;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        // Mouse Drag to Scroll
        const handleMouseDown = (e) => {
            isMouseDown = true;
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        };

        const handleMouseLeave = () => {
            isMouseDown = false;
            isHovered = false;
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        const handleMouseMove = (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * 1.5; // sensitivitas drag
            el.scrollLeft = scrollLeft - walk;
        };

        // Hover events
        const handleMouseEnter = () => {
            isHovered = true;
        };

        // Touch events for mobile
        const handleTouchStart = () => {
            isMouseDown = true;
        };

        const handleTouchEnd = () => {
            isMouseDown = false;
        };

        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseup', handleMouseUp);
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('touchstart', handleTouchStart, { passive: true });
        el.addEventListener('touchend', handleTouchEnd, { passive: true });

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
            el.removeEventListener('mousedown', handleMouseDown);
            el.removeEventListener('mouseleave', handleMouseLeave);
            el.removeEventListener('mouseup', handleMouseUp);
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('touchstart', handleTouchStart);
            el.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <section className="py-12 md:py-16 lg:py-20" id="about">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                     {/* About Text */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
                        {/* Section label */}
                        <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                            <div className="accent-line" />
                            <span className="text-[#1e3a8a] dark:text-[#60a5fa] font-heading font-semibold text-sm uppercase tracking-wider">About Me</span>
                        </motion.div>

                        <motion.h2 variants={slideInLeft} className="section-heading mb-6">
                            Building digital experiences with <span className="gradient-text dark:hidden">purpose</span><span className="hidden dark:inline gradient-text-dark">purpose</span>
                        </motion.h2>

                        <motion.div variants={fadeIn} className="text-surface-500 dark:text-surface-400 space-y-4 text-[1.05rem] leading-relaxed">
                            <p>
                                I believe that great work is inherently invisible—it allows users to accomplish their goals seamlessly. With a background deeply rooted in <strong className="font-semibold text-surface-800 dark:text-surface-200">Web Development</strong>, as well as a strong passion for <strong className="font-semibold text-surface-800 dark:text-surface-200">Graphic Design</strong> and <strong className="font-semibold text-surface-800 dark:text-surface-200">Photography/Videography</strong>, I bridge the gap between technical functionality and visual aesthetics.
                            </p>
                            <p>
                                Beyond writing code, I love capturing moments and creating compelling visual stories. Most of my creative portfolios and completed multimedia works are actively published on my social media channels, particularly on <a href="https://www.youtube.com/@nofiardimanw" target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] dark:text-[#60a5fa] font-semibold hover:underline underline-offset-4 decoration-[#1e3a8a]/30 hover:decoration-[#60a5fa] transition-colors">YouTube</a>.
                            </p>
                        </motion.div>

                        {/* Core Technologies */}
                        <motion.div variants={fadeIn} className="mt-10 overflow-hidden">
                            <h3 className="font-heading text-lg mb-5 font-semibold text-surface-900 dark:text-white flex items-center gap-2">
                                Core Technologies
                                <span className="w-2 h-2 rounded-full bg-[#1e3a8a] dark:bg-[#60a5fa]" />
                            </h3>
                            <div className="marquee-container py-2">
                                <div 
                                    ref={scrollRef}
                                    className="flex gap-3 overflow-x-auto scrollbar-hide py-2 cursor-grab active:cursor-grabbing select-none"
                                >
                                    {/* First loop */}
                                    {coreTechnologies.map((tech, index) => (
                                        <div
                                            key={`${tech.name}-1`}
                                            className="group flex items-center gap-2 text-sm px-3.5 py-2 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-200 font-medium border border-surface-200 dark:border-surface-700 cursor-default transition-all duration-300 hover:shadow-md hover:border-[#1e3a8a] dark:hover:border-[#60a5fa] shrink-0"
                                        >
                                            <span className="text-[10px] text-surface-400 dark:text-surface-500 font-mono font-semibold bg-surface-200/50 dark:bg-surface-700/30 px-1.5 py-0.5 rounded-md">{String(index + 1).padStart(2, '0')}</span>
                                            <tech.icon className="text-base text-surface-900 dark:text-white group-hover:text-[#1e3a8a] dark:group-hover:text-[#60a5fa] transition-colors duration-300 transform group-hover:scale-110 pointer-events-none" />
                                            {tech.name}
                                        </div>
                                    ))}
                                    {/* Second loop for seamless effect */}
                                    {coreTechnologies.map((tech, index) => (
                                        <div
                                            key={`${tech.name}-2`}
                                            className="group flex items-center gap-2 text-sm px-3.5 py-2 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-200 font-medium border border-surface-200 dark:border-surface-700 cursor-default transition-all duration-300 hover:shadow-md hover:border-[#1e3a8a] dark:hover:border-[#60a5fa] shrink-0"
                                        >
                                            <span className="text-[10px] text-surface-400 dark:text-surface-500 font-mono font-semibold bg-surface-200/50 dark:bg-surface-700/30 px-1.5 py-0.5 rounded-md">{String(index + 1).padStart(2, '0')}</span>
                                            <tech.icon className="text-base text-surface-900 dark:text-white group-hover:text-[#1e3a8a] dark:group-hover:text-[#60a5fa] transition-colors duration-300 transform group-hover:scale-110 pointer-events-none" />
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} id="experience">
                        {/* Section label */}
                        <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                            <div className="accent-line" />
                            <span className="text-[#1e3a8a] dark:text-[#60a5fa] font-heading font-semibold text-sm uppercase tracking-wider">Experience</span>
                        </motion.div>

                        <motion.h2 variants={slideInRight} className="section-heading mb-10">
                            My professional journey
                        </motion.h2>

                        <motion.div variants={fadeIn} className="relative pl-8 border-l-2 border-[#1e3a8a]/30 dark:border-[#60a5fa]/30 flex flex-col gap-10">
                            {/* Experience 1 */}
                            <div className="timeline-node relative">
                                <div className="glass-card p-5 sm:p-6 rounded-xl hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 hover:-translate-y-0.5">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-heading font-semibold rounded-lg bg-[#1e3a8a]/5 dark:bg-[#60a5fa]/10 border border-[#1e3a8a]/20 dark:border-[#60a5fa]/20 text-[#1e3a8a] dark:text-[#60a5fa]">
                                        Nov 15 – Nov 19, 2025
                                    </span>
                                    <h3 className="font-heading text-lg font-bold text-surface-900 dark:text-white mb-1">
                                        Graphic Designer
                                        <span className="text-surface-400 dark:text-surface-500 font-normal text-base ml-1">(Contract)</span>
                                    </h3>
                                    <p className="text-[#1e3a8a] dark:text-[#60a5fa] text-sm font-medium mb-3">
                                        PT. Cipta Megah Lestarindo, Tangerang
                                    </p>
                                    <ul className="text-[0.9rem] text-surface-500 dark:text-surface-400 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] dark:bg-[#60a5fa] mt-2 shrink-0" />
                                            Completed a visual design project for a plastic processing machine marketing brochure within a tight deadline.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] dark:bg-[#60a5fa] mt-2 shrink-0" />
                                            Collaborate with the marketing team to ensure brand identity consistency in every design asset produced.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Experience 2 */}
                            <div className="timeline-node relative">
                                <div className="glass-card p-5 sm:p-6 rounded-xl hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 hover:-translate-y-0.5">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-heading font-semibold rounded-lg bg-accent-50 dark:bg-accent-900/20 text-[#1e3a8a] dark:text-[#60a5fa]">
                                        Oct 2024 – Oct 2025
                                    </span>
                                    <h3 className="font-heading text-lg font-bold text-surface-900 dark:text-white mb-1">
                                        Web Developer
                                    </h3>
                                    <p className="text-[#1e3a8a] dark:text-[#60a5fa] text-sm font-medium mb-3">
                                        President University Student Council, Cikarang
                                    </p>
                                    <ul className="text-[0.9rem] text-surface-500 dark:text-surface-400 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] dark:bg-[#60a5fa] mt-2 shrink-0" />
                                            Weekly website maintenance, checking for security vulnerabilities and bugs.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] dark:bg-[#60a5fa] mt-2 shrink-0" />
                                            Successfully integrated from native PHP to the Laravel framework.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutExperience;
