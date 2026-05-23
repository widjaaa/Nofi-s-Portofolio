import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
import { fadeIn, staggerContainer, scaleUp } from '../utils/motion';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <section className="py-20 md:py-28 lg:py-32 relative" id="projects">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-100/50 via-surface-50 to-surface-100/50 dark:from-surface-800/30 dark:via-surface-900 dark:to-surface-800/30 -z-10" />

            <div className="section-container">
                {/* Section header */}
                <div className="mb-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                            <div className="accent-line" />
                            <span className="text-[#1e3a8a] dark:text-[#60a5fa] font-heading font-semibold text-sm uppercase tracking-wider">Portfolio</span>
                        </motion.div>
                        <motion.h2 variants={fadeIn} className="section-heading mb-4">
                            Selected Works
                        </motion.h2>
                        <motion.p variants={fadeIn} className="section-subtext">
                            A collection of projects showcasing my philosophy in code and design.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Projects grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={scaleUp}
                            className={`group tilt-card ${projectsData.length === 1 ? 'md:col-span-2 max-w-3xl mx-auto w-full' : ''}`}
                        >
                            <div className="glass-card overflow-hidden h-full flex flex-col hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-500">
                                {/* Project image */}
                                <div className="relative w-full aspect-[16/9] overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full transition-all duration-700 group-hover:scale-105 bg-surface-200 dark:bg-surface-800"
                                        />
                                    )}
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 via-surface-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Floating action on hover */}
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        {project.liveSiteUrl && (
                                            <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/90 dark:bg-surface-800/90 backdrop-blur-md flex items-center justify-center text-surface-700 dark:text-surface-200 hover:bg-white hover:text-accent-600 transition-colors shadow-lg">
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/90 dark:bg-surface-800/90 backdrop-blur-md flex items-center justify-center text-surface-700 dark:text-surface-200 hover:bg-white hover:text-surface-900 transition-colors shadow-lg">
                                                <Github size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-surface-900 dark:text-white mb-3 group-hover:text-[#1e3a8a] dark:group-hover:text-[#60a5fa] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-surface-500 dark:text-surface-400 text-[0.95rem] leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1.5 rounded-lg bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300 font-heading font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-3 mt-auto">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline !px-5 !py-2.5 !text-sm !rounded-lg flex items-center gap-1.5">
                                                <Github size={15} /> Code
                                            </a>
                                        )}
                                        {project.liveSiteUrl && (
                                            <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5 !text-sm !rounded-lg shimmer-btn flex items-center gap-1.5">
                                                Live Site <ArrowRight size={15} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* See more */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-14 flex justify-center">
                    <a href="https://github.com/widjaaa" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        See more on GitHub <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
