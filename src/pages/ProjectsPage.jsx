import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
import { fadeIn, staggerContainer, scaleUp } from '../utils/motion';
import { projectsData } from '../data/projectsData';

const ProjectsPage = () => {
    // Scroll to top when loading the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden min-h-screen">
            {/* Background subtle accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-100/60 to-transparent dark:via-surface-900/40 -z-10" />

            <div className="section-container">
                {/* Section header */}
                <div className="mb-16 md:mb-20">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4">
                            <div className="accent-line" />
                            <span className="text-accent-600 dark:text-accent-400 font-heading font-bold text-xs uppercase tracking-widest">Portfolio</span>
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="section-heading mb-4">
                            All Projects
                        </motion.h1>
                        <motion.p variants={fadeIn} className="section-subtext">
                            A complete list of my works, engineering solutions, web applications, and creative visual projects.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Projects grid - Standard uniform layout */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={scaleUp}
                            className="group tilt-card"
                        >
                            <div className="glass-card overflow-hidden h-full flex flex-col hover:border-accent-500/40 dark:hover:border-accent-400/30 transition-all duration-500">
                                {/* Project image container */}
                                <div className="relative w-full overflow-hidden aspect-[16/10]">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full transition-transform duration-700 group-hover:scale-105 bg-surface-200 dark:bg-surface-800"
                                        />
                                    )}
                                    {/* Hover overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/70 via-surface-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Floating action links on hover */}
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                                        {project.liveSiteUrl && (
                                            <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-900/90 dark:bg-surface-800/90 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent-500 hover:text-white transition-colors shadow-lg">
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-900/90 dark:bg-surface-800/90 backdrop-blur-md flex items-center justify-center text-white hover:bg-surface-700 transition-colors shadow-lg">
                                                <Github size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content area */}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-surface-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-surface-600 dark:text-surface-400 text-[0.95rem] leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-3 py-1.5 rounded-lg bg-surface-100 dark:bg-surface-800/90 border border-surface-200 dark:border-surface-700/80 text-surface-700 dark:text-surface-300 font-heading font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action buttons */}
                                        <div className="flex flex-wrap gap-3">
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-4 py-2.5 flex items-center gap-1.5">
                                                    <Github size={15} /> Code
                                                </a>
                                            )}
                                            {project.liveSiteUrl && (
                                                <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-4 py-2.5 flex items-center gap-1.5">
                                                    Live Site <ArrowRight size={15} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsPage;
