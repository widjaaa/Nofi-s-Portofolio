import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { SiJavascript, SiTypescript, SiReact, SiLaravel, SiNodedotjs, SiTailwindcss, SiAdobepremierepro, SiCanva, SiAdobelightroom, SiGit, SiKalilinux } from 'react-icons/si';
import { Radar } from 'lucide-react';

const coreTechnologies = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-[#FF2D20]' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'Premiere Pro', icon: SiAdobepremierepro, color: 'text-[#9999FF]' },
    { name: 'Canva', icon: SiCanva, color: 'text-[#00C4CC]' },
    { name: 'Lightroom', icon: SiAdobelightroom, color: 'text-[#31A8FF]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'Kali Linux', icon: SiKalilinux, color: 'text-[#557C94]' },
    { name: 'Nmap', icon: Radar, color: 'text-[#254B87]' }
];

const AboutExperience = () => {
    return (
        <section className="py-12 md:py-24 lg:py-16 flex flex-col justify-center" id="experience">
            <div className="w-full max-w-[1600px] mx-auto px-[6%] lg:px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-24">
                    {/* About Text */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                        <motion.h2 variants={fadeIn} className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 dark:text-white leading-[1.2]" id="about">About Me</motion.h2>
                        <motion.div variants={fadeIn} className="text-slate-500 dark:text-slate-400 mb-8 flex-grow text-[1.1rem]">
                            <p className="mb-4">
                                I believe that great work is inherently invisible—it allows users to accomplish their goals seamlessly. With a background deeply rooted in <strong className="font-semibold text-slate-900 dark:text-white">Web Development</strong>, as well as a strong passion for <strong className="font-semibold text-slate-900 dark:text-white">Graphic Design</strong> and <strong className="font-semibold text-slate-900 dark:text-white">Photography/Videography</strong>, I bridge the gap between technical functionality and visual aesthetics.
                            </p>
                            <p>
                                Beyond writing code, I love capturing moments and creating compelling visual stories. Most of my creative portfolios and completed multimedia works are actively published on my social media channels, particularly on <a href="https://www.youtube.com/@nofiardimanw" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">YouTube</a>.
                            </p>
                        </motion.div>

                        <motion.h3 variants={fadeIn} className="font-sans text-xl mb-4 font-semibold text-slate-900 dark:text-white">Core Technologies</motion.h3>
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
                            {coreTechnologies.map(tech => (
                                <span key={tech.name} className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-medium border border-slate-900/10 dark:border-white/10 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:hover:bg-slate-700">
                                    <tech.icon className={`text-base ${tech.color}`} />
                                    {tech.name}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                        <motion.h2 variants={fadeIn} className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 dark:text-white leading-[1.2]">Experience</motion.h2>
                        <motion.div variants={fadeIn} className="relative pl-8 border-l border-slate-900/10 dark:border-white/10 flex flex-col gap-10 mt-8">
                            <div className="relative">
                                <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white"></div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium">Nov 15, 2025 – Nov 19, 2025</div>
                                <h3 className="font-sans text-lg font-semibold text-slate-900 dark:text-white mb-2">Graphic Designer (Contract) <span className="text-slate-400 font-normal">@ PT. CIPTA MEGAH LESTARINDO, Tangerang</span></h3>
                                <ul className="text-[0.95rem] text-slate-500 dark:text-slate-400 list-disc pl-5 flex flex-col gap-1.5">
                                    <li>Completed a visual design project for a plastic processing machine marketing brochure within a tight deadline.</li>
                                    <li>Collaborate with the marketing team to ensure brand identity consistency in every design asset produced.</li>
                                </ul>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white"></div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium">Oct 2024 – Oct 2025</div>
                                <h3 className="font-sans text-lg font-semibold text-slate-900 dark:text-white mb-2">Web Developer <span className="text-slate-400 font-normal">@ President University Student Council, Cikarang</span></h3>
                                <ul className="text-[0.95rem] text-slate-500 dark:text-slate-400 list-disc pl-5 flex flex-col gap-1.5">
                                    <li>Weekly website maintenance, checking for security vulnerabilities and bugs.</li>
                                    <li>Successfully integrated from native PHP to the Laravel framework.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutExperience;
