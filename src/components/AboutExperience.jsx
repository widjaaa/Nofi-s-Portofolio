import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFramer, SiGit } from 'react-icons/si';

const coreTechnologies = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-900 dark:text-white' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'Framer Motion', icon: SiFramer, color: 'text-[#0055FF] dark:text-[#00A2FF]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' }
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
                                I believe that great design is inherently invisible—it allows users to accomplish their goals seamlessly. With a background deeply rooted in <strong className="font-semibold text-slate-900 dark:text-white">Software Architecture</strong> and a keen eye for <strong className="font-semibold text-slate-900 dark:text-white">Design</strong>, I bridge the gap between aesthetics and functionality.
                            </p>
                            <p>
                                My toolkit includes modern technologies like React, TypeScript, and elegant state management paradigms. I build web applications not just to look good, but to perform beautifully across all devices.
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
                                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium">2023 - Present</div>
                                <h3 className="font-sans text-lg font-semibold text-slate-900 dark:text-white mb-2">Senior Frontend Engineer <span className="text-slate-400 font-normal">@ TechCorp</span></h3>
                                <p className="text-[0.95rem] text-slate-500 dark:text-slate-400">Leading the architectural redesign of the core web product. Implementing modern React practices and establishing the design system logic.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white"></div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium">2021 - 2023</div>
                                <h3 className="font-sans text-lg font-semibold text-slate-900 dark:text-white mb-2">Web Developer <span className="text-slate-400 font-normal">@ AgencyX</span></h3>
                                <p className="text-[0.95rem] text-slate-500 dark:text-slate-400">Created immersive marketing campaigns and dynamic web experiences for high-profile clients utilizing React and Framer Motion.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white"></div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium">2019 - 2021</div>
                                <h3 className="font-sans text-lg font-semibold text-slate-900 dark:text-white mb-2">Junior Developer <span className="text-slate-400 font-normal">@ StartupHub</span></h3>
                                <p className="text-[0.95rem] text-slate-500 dark:text-slate-400">Assisted in developing single-page applications and responsive UI components based on precise designer mockups.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutExperience;
