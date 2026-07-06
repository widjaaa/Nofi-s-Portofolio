import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { fadeIn, slideInLeft, slideInRight, staggerContainer, scaleUp } from '../utils/motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden" id="home">
            {/* Tech Grid Background (Minimalist & Professional) */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
                {/* Grid for Light Mode */}
                <div 
                    className="absolute inset-0 dark:hidden opacity-90 animate-grid-scroll"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(30, 58, 138, 0.12) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(30, 58, 138, 0.12) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                    }}
                />
                
                {/* Grid for Dark Mode */}
                <div 
                    className="absolute inset-0 hidden dark:block opacity-70 animate-grid-scroll"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                    }}
                />

                {/* Ambient Glows to blend with Navy/Light Blue theme */}
                <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-[#1e3a8a]/8 dark:bg-[#60a5fa]/5 rounded-full blur-[130px] animate-float-slow" />
                <div className="absolute bottom-10 left-10 w-[40%] h-[40%] bg-[#1e3a8a]/5 dark:bg-[#60a5fa]/3 rounded-full blur-[120px] animate-float" />
            </div>

            {/* Hero-specific decorative elements */}
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-accent-400/10 dark:bg-accent-400/5 rounded-full blur-[100px] animate-pulse-soft pointer-events-none z-0" />
            <div className="absolute bottom-20 right-[15%] w-60 h-60 bg-highlight-400/10 dark:bg-highlight-400/5 rounded-full blur-[80px] animate-pulse-soft pointer-events-none z-0" style={{ animationDelay: '1.5s' }} />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-center max-w-[1100px] mx-auto">
                    {/* Left — Text */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className=""
                    >
                        {/* Status badge */}
                        <motion.div variants={fadeIn} className="mb-6">
                            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1e3a8a]/5 dark:bg-[#60a5fa]/10 border border-[#1e3a8a]/20 dark:border-[#60a5fa]/20 text-[#1e3a8a] dark:text-[#60a5fa] text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1e3a8a] dark:bg-[#60a5fa] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1e3a8a] dark:bg-[#60a5fa]"></span>
                                </span>
                                Available for opportunities
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1 variants={slideInLeft} className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[1.1] mb-2 text-surface-900 dark:text-white">
                            Hi, I'm{' '}
                            <span className="gradient-text dark:hidden">Nofi</span>
                            <span className="hidden dark:inline gradient-text-dark">Nofi</span>
                        </motion.h1>

                        {/* Typewriter line */}
                        <motion.div variants={fadeIn} className="text-[clamp(1.25rem,3vw,2rem)] font-heading font-semibold text-surface-400 dark:text-surface-500 mb-6 min-h-[1.5em]">
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
                        <motion.p variants={fadeIn} className="text-lg text-surface-500 dark:text-surface-400 mb-10 max-w-[520px] leading-relaxed">
                            I craft elegant digital experiences that combine minimalist aesthetics with robust engineering. Focusing on building intuitive and dynamic web applications.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div variants={fadeIn} className="flex gap-3 sm:gap-4 flex-wrap">
                            <a href="#projects" className="btn-primary shimmer-btn">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="/cv/cvnofi.pdf" download="Nofi_Ardiman_Widjaya_CV.pdf" className="btn-secondary">
                                Download CV <FileText size={18} />
                            </a>
                            <a href="#contact" className="btn-outline">
                                Let's Talk
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right — Photo with blob mask */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={scaleUp}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glow ring behind photo */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-accent-400/20 via-transparent to-highlight-400/20 rounded-[2rem] blur-2xl animate-pulse-soft" />

                            {/* Photo container */}
                            <div className="relative rounded-[2rem] overflow-hidden shadow-card-hover dark:shadow-card-dark-hover w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[360px] lg:h-[450px] border-2 border-white/50 dark:border-surface-700/50 bg-surface-100 dark:bg-surface-800">
                                <img
                                    src="/images/nofi.webp"
                                    alt="Nofi Ardiman Widjaya"
                                    fetchpriority="high"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                {/* Subtle gradient overlay at bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-900/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating decorative badge */}
                            {/* Badge removed as requested */}
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
                    <a href="#about" className="flex flex-col items-center gap-2 text-surface-400 hover:text-accent-500 transition-colors duration-300">
                        <span className="text-xs font-heading font-medium tracking-wider uppercase">Scroll</span>
                        <ChevronDown size={16} className="animate-bounce" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
