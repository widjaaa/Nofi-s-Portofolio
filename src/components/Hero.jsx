import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { fadeIn, slideInLeft, slideInRight, staggerContainer, scaleUp } from '../utils/motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden" id="home">
            {/* Hero-specific decorative elements */}
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-accent-400/10 dark:bg-accent-400/5 rounded-full blur-[100px] animate-pulse-soft pointer-events-none" />
            <div className="absolute bottom-20 right-[15%] w-60 h-60 bg-highlight-400/10 dark:bg-highlight-400/5 rounded-full blur-[80px] animate-pulse-soft pointer-events-none" style={{ animationDelay: '1.5s' }} />

            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
                    {/* Left — Text */}
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={staggerContainer} 
                        className="max-w-[620px]"
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
                                words={['Software Engineer', 'Frontend Developer', 'UI/UX Enthusiast', 'Cybersecurity Enthusiast', 'Fotografer', 'Videografer', 'Design Grafis']}
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
                            <a href="/cv/cvnofi.pdf" download="cvnofi.pdf" className="btn-secondary">
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
                            <div className="relative rounded-[2rem] overflow-hidden shadow-card-hover dark:shadow-card-dark-hover w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[360px] lg:h-[450px] border-2 border-white/50 dark:border-surface-700/50">
                                <img
                                    src="/images/nofi.png"
                                    alt="Nofi Ardiman Widjaya"
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
