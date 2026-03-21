import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/motion';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <section className="py-12 md:py-24 lg:py-28 flex flex-col justify-center bg-slate-100 dark:bg-slate-800/50 transition-colors" id="projects">
            <div className="w-full max-w-[1600px] mx-auto px-[6%] lg:px-[5%]">
                <div className="mb-16 max-w-[600px]">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 dark:text-white leading-[1.2]">
                        Selected Works
                    </motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-slate-500 dark:text-slate-400 text-lg">
                        A collection of projects showcasing my philosophy in code and design.
                    </motion.p>
                </div>

                <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10 mt-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                    {projectsData.map((project) => (
                        <motion.div key={project.id} variants={fadeIn} className="group bg-white dark:bg-slate-900 border border-slate-900/10 dark:border-white/10 rounded-3xl p-4 transition-all duration-400 shadow-card flex flex-col h-full hover:-translate-y-2 hover:shadow-card-hover hover:border-slate-900/15 dark:hover:border-white/20">
                            {project.image ? (
                                <div className="w-full h-[220px] rounded-2xl overflow-hidden mb-6">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                            ) : (
                                <div className="w-full h-[220px] rounded-2xl overflow-hidden mb-6">
                                    <div className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ background: project.gradient }}>
                                        {/* Placeholder for project thumbnail */}
                                    </div>
                                </div>
                            )}
                            <div className="px-2 pb-4 flex flex-col flex-grow">
                                <h3 className="font-serif text-2xl mb-3 font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-6 text-[0.95rem] flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="text-xs px-3.5 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 font-medium border border-slate-900/10 dark:border-white/10">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto">
                                    <a href={project.githubUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-transparent text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/10 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-900 dark:hover:border-white hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.05)]"><Github size={16} /> Code</a>
                                    <a href={project.liveSiteUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.1)]">Live Site <ArrowRight size={16} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* See More Button */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-16 flex justify-center">
                    <a href="/projects" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 bg-white dark:bg-slate-900 border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white hover:border-slate-900 dark:hover:border-white hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.1)]">
                        See more <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
