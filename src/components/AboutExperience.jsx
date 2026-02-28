import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const AboutExperience = () => {
    return (
        <section className="py-12 md:py-24 lg:py-16 flex flex-col justify-center" id="experience">
            <div className="w-full max-w-[1600px] mx-auto px-[6%] lg:px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-24">
                    {/* About Text */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                        <motion.h2 variants={fadeIn} className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 leading-[1.2]" id="about">About Me</motion.h2>
                        <motion.div variants={fadeIn} className="text-slate-500 mb-8 flex-grow text-[1.1rem]">
                            <p className="mb-4">
                                I believe that great design is inherently invisible—it allows users to accomplish their goals seamlessly. With a background deeply rooted in <strong className="font-semibold text-slate-900">Software Architecture</strong> and a keen eye for <strong className="font-semibold text-slate-900">Design</strong>, I bridge the gap between aesthetics and functionality.
                            </p>
                            <p>
                                My toolkit includes modern technologies like React, TypeScript, and elegant state management paradigms. I build web applications not just to look good, but to perform beautifully across all devices.
                            </p>
                        </motion.div>

                        <motion.h3 variants={fadeIn} className="font-sans text-xl mb-4 font-semibold text-slate-900">Core Technologies</motion.h3>
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
                            {['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Git'].map(skill => (
                                <span key={skill} className="text-xs px-3.5 py-1.5 rounded-md bg-slate-900 text-white font-medium border-none">{skill}</span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                        <motion.h2 variants={fadeIn} className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 leading-[1.2]">Experience</motion.h2>
                        <motion.div variants={fadeIn} className="relative pl-8 border-l border-slate-900/10 flex flex-col gap-10 mt-8">
                            <div className="relative">
                                <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-slate-50 border-2 border-slate-900"></div>
                                <div className="text-sm text-slate-500 mb-1 font-medium">2023 - Present</div>
                                <h3 className="font-sans text-lg font-semibold text-slate-900 mb-2">Senior Frontend Engineer <span className="text-slate-400 font-normal">@ TechCorp</span></h3>
                                <p className="text-[0.95rem] text-slate-500">Leading the architectural redesign of the core web product. Implementing modern React practices and establishing the design system logic.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-slate-50 border-2 border-slate-900"></div>
                                <div className="text-sm text-slate-500 mb-1 font-medium">2021 - 2023</div>
                                <h3 className="font-sans text-lg font-semibold text-slate-900 mb-2">Web Developer <span className="text-slate-400 font-normal">@ AgencyX</span></h3>
                                <p className="text-[0.95rem] text-slate-500">Created immersive marketing campaigns and dynamic web experiences for high-profile clients utilizing React and Framer Motion.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-slate-50 border-2 border-slate-900"></div>
                                <div className="text-sm text-slate-500 mb-1 font-medium">2019 - 2021</div>
                                <h3 className="font-sans text-lg font-semibold text-slate-900 mb-2">Junior Developer <span className="text-slate-400 font-normal">@ StartupHub</span></h3>
                                <p className="text-[0.95rem] text-slate-500">Assisted in developing single-page applications and responsive UI components based on precise designer mockups.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutExperience;
