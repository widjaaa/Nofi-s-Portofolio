import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, staggerContainer } from '../utils/motion';
import { SiJavascript, SiTypescript, SiPhp, SiReact, SiLaravel, SiNodedotjs, SiTailwindcss, SiAdobepremierepro, SiCanva, SiAdobelightroom, SiGit, SiKalilinux, SiHtml5, SiCss3, SiWireshark, SiBurpsuite, SiCplusplus, SiPython, SiRstudioide, SiAdobephotoshop, SiMysql, SiPostgresql, SiDocker, SiPostman, SiGithub } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { Radar, Code2, Globe, Shield, Palette, Wrench, HardDrive, Search, Database, Terminal } from 'lucide-react';

// Custom icon for NetworkMiner
const NetworkMinerIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const techCategories = [
    {
        category: 'Frontend',
        icon: Globe,
        items: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        ]
    },
    {
        category: 'Programming',
        icon: Code2,
        items: [
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'PHP', icon: SiPhp, color: '#777BB4' },
            { name: 'C++', icon: SiCplusplus, color: '#00599C' },
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'R Studio', icon: SiRstudioide, color: '#75AADB' },
        ]
    },
    {
        category: 'Backend & Database',
        icon: Database,
        items: [
            { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        ]
    },
    {
        category: 'Cybersecurity',
        icon: Shield,
        items: [
            { name: 'Kali Linux', icon: SiKalilinux, color: '#557C94' },
            { name: 'Nmap', icon: Radar, color: '#4682B4' },
            { name: 'Burp Suite', icon: SiBurpsuite, color: '#FF6633' },
            { name: 'Wireshark', icon: SiWireshark, color: '#1679A7' },
            { name: 'NetworkMiner', icon: NetworkMinerIcon, color: '#2E8B57' },
            { name: 'FTK Imager', icon: HardDrive, color: '#5B9BD5' },
            { name: 'Autopsy', icon: Search, color: '#D35400' },
        ]
    },
    {
        category: 'Creative & Design',
        icon: Palette,
        items: [
            { name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#9999FF' },
            { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
            { name: 'Lightroom', icon: SiAdobelightroom, color: '#7BB4FF' },
            { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
        ]
    },
    {
        category: 'Tools',
        icon: Terminal,
        items: [
            { name: 'Git', icon: SiGit, color: '#F05032' },
            { name: 'GitHub', icon: SiGithub, color: '#181717' },
            { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC' },
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        ]
    },
];

const About = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20" id="about">
            <div className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
                    {/* Section label */}
                    <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                        <div className="accent-line" />
                        <span className="text-accent-600 dark:text-accent-400 font-heading font-semibold text-sm uppercase tracking-wider">About Me</span>
                    </motion.div>

                    <motion.h2 variants={slideInLeft} className="section-heading mb-6">
                        Building digital experiences with <span className="gradient-text dark:hidden">purpose</span><span className="hidden dark:inline gradient-text-dark">purpose</span>
                    </motion.h2>

                    <motion.div variants={fadeIn} className="text-surface-600 dark:text-surface-400 space-y-4 text-[1.05rem] leading-relaxed max-w-3xl">
                        <p>
                            I believe that great work is inherently invisible it allows users to accomplish their goals seamlessly. With a background deeply rooted in <strong className="font-semibold text-surface-900 dark:text-surface-100">Web Development</strong>, as well as a strong passion for <strong className="font-semibold text-surface-900 dark:text-surface-100">Graphic Design</strong> and <strong className="font-semibold text-surface-900 dark:text-surface-100">Photography/Videography</strong>, I bridge the gap between technical functionality and visual aesthetics.
                        </p>
                        <p>
                            Beyond writing code, I love capturing moments and creating compelling visual stories. Most of my creative portfolios and completed multimedia works are actively published on my social media channels, particularly on <a href="https://www.youtube.com/@nofiardimanw" target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 font-semibold hover:underline underline-offset-4 decoration-accent-500/30 hover:decoration-accent-400 transition-colors">YouTube</a>.
                        </p>
                    </motion.div>

                    {/* Core Technologies */}
                    <motion.div variants={fadeIn} className="mt-12">
                        <h3 className="font-heading text-lg mb-10 font-semibold text-surface-900 dark:text-white flex items-center gap-2">
                            Core Technologies
                            <span className="w-2 h-2 rounded-full bg-accent-500" />
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
                            {techCategories.map((cat) => (
                                <div key={cat.category}>
                                    {/* Category Title */}
                                    <h4 className="font-heading font-bold text-base sm:text-lg text-surface-900 dark:text-white mb-6 text-center">
                                        {cat.category}
                                    </h4>

                                    {/* Icons Grid */}
                                    <div className="grid grid-cols-2 gap-4 sm:gap-5">
                                        {cat.items.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
                                            >
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                                                    <tech.icon className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                                                </div>
                                                <span className="text-xs sm:text-sm text-surface-500 dark:text-surface-400 font-medium text-center leading-tight">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
