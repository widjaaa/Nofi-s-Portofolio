import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, FileText, ChevronDown, Camera } from 'lucide-react';
import { fadeIn, slideInLeft, staggerContainer, scaleUp } from '../utils/motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden" id="home">
            {/* Single Focal Lens Aura (Replaces 7 stacked grid and blur effects) */}
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center max-w-[1150px] mx-auto">
                    {/* Left — Editorial Text */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Viewfinder Status badge */}
                        <motion.div variants={fadeIn} className="mb-6">
                            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-xs font-heading font-semibold tracking-wider text-surface-900 dark:text-surface-100 uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight-500"></span>
                                </span>
                                Available for opportunities
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1 variants={slideInLeft} className="font-heading text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold tracking-tight leading-[1.08] mb-3 text-surface-900 dark:text-white">
                            Hi, I'm{' '}
                            <span className="gradient-text dark:hidden">Nofi</span>
                            <span className="hidden dark:inline gradient-text-dark">Nofi</span>
                        </motion.h1>

                        {/* Typewriter line */}
                        <motion.div variants={fadeIn} className="text-[clamp(1.2rem,2.5vw,1.75rem)] font-heading font-semibold text-surface-500 dark:text-surface-400 mb-6 min-h-[1.5em]">
                            <Typewriter
                                words={['Backend Developer', 'Frontend Developer', 'Cybersecurity Enthusiast', 'Fotografer', 'Videografer', 'Design Grafis']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p variants={fadeIn} className="text-base sm:text-lg text-surface-600 dark:text-surface-400 mb-10 max-w-[520px] leading-relaxed">
                            I craft elegant digital experiences that combine minimalist aesthetics with robust engineering. Focusing on building intuitive and dynamic web applications.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="/cv/cvnofi.pdf" download="Nofi_Ardiman_Widjaya_CV.pdf" className="btn-secondary w-full sm:w-auto justify-center">
                                Download CV <FileText size={18} />
                            </a>
                            <a href="#contact" className="btn-outline w-full sm:w-auto justify-center">
                                Let's Talk
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right — Viewfinder Signature Photo Frame */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={scaleUp}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] flex justify-center">
                            {/* Warm Golden Hour Lens Aura */}
                            <div className="absolute -inset-3 bg-gradient-to-tr from-accent-500/25 via-accent-400/10 to-highlight-500/20 rounded-[2rem] blur-xl opacity-80 pointer-events-none" />

                            {/* Viewfinder Framed Photo Container */}
                            <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl w-full aspect-[4/5] border-2 border-surface-200 dark:border-surface-700/60 bg-surface-100 dark:bg-surface-800 group">
                                {/* Viewfinder Corner Reticles */}
                                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent-500/80 dark:border-accent-400/80 z-20 pointer-events-none" />
                                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent-500/80 dark:border-accent-400/80 z-20 pointer-events-none" />
                                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent-500/80 dark:border-accent-400/80 z-20 pointer-events-none" />
                                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent-500/80 dark:border-accent-400/80 z-20 pointer-events-none" />

                                <img
                                    src="/images/nofi.webp"
                                    alt="Nofi Ardiman Widjaya"
                                    fetchpriority="high"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Viewfinder Overlay Tag */}
                                <div className="absolute bottom-4 left-4 right-4 py-2 px-3 rounded-xl bg-surface-900/80 dark:bg-surface-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-white text-xs font-heading">
                                    <span className="flex items-center gap-1.5 text-accent-400 font-semibold tracking-wider">
                                        <Camera size={13} /> 35MM // DEV
                                    </span>
                                    <span className="text-surface-400 text-[10px] font-mono tracking-widest uppercase">
                                        ISO 400
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="hidden lg:flex justify-center mt-16"
                >
                    <a href="#about" className="flex flex-col items-center gap-2 text-surface-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300">
                        <span className="text-xs font-heading font-semibold tracking-widest uppercase">Scroll</span>
                        <ChevronDown size={16} className="animate-bounce" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
