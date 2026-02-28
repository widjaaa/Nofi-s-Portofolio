import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, FileText } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/motion';
import CVNofi from '../assets/cv/cvnofi.pdf';

const Hero = () => {
    return (
        <section className="py-12 md:py-24 lg:py-25 flex flex-col justify-center relative pt-32 pb-12 md:pt-48 md:pb-24" id="home">
            <div className="w-full max-w-[1600px] mx-auto px-[6%] lg:px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 items-start">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[600px]">
                        <motion.div variants={fadeIn} className="text-slate-500 font-medium text-lg mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-teal-600 rounded-full inline-block shadow-[0_0_0_4px_rgba(13,148,136,0.2)]"></span>
                            Available for new opportunities
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="font-serif text-[clamp(1.75rem,4.5vw,4.5rem)] mb-6 font-medium italic tracking-tight leading-[1.2] text-slate-900 flex flex-col">
                            <span>Hi, I'm Nofi</span>
                            <span className="not-italic inline-block whitespace-nowrap min-h-[1.2em]">
                                <Typewriter
                                    words={['Software Engineer', 'Frontend Developer', 'UI/UX Enthusiast', 'Cybersecurity Enthusiast']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-xl text-slate-500 mb-12 max-w-[650px] leading-relaxed">
                            I craft elegant, digital experiences that combine minimalist aesthetics with robust engineering. Focusing on building intuitive and dynamic web applications.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex gap-5 flex-wrap">
                            <a href="#projects" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 bg-slate-900 text-white hover:bg-slate-700 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.1)]">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href={CVNofi} download="cvnofi.pdf" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 bg-teal-600 text-white hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(13,148,136,0.2)]">
                                Download CV <FileText size={18} />
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 bg-transparent text-slate-900 border border-slate-900/10 hover:bg-white hover:border-slate-900 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.05)]">Let's Talk</a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/5] bg-slate-100 w-full max-w-[380px]">
                            <img
                                src="src/assets/images/nofi.png"
                                alt="Profile Placeholder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
