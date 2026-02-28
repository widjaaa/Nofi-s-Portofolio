import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/motion';

const Projects = () => {
    return (
        <section className="py-12 md:py-24 lg:py-28 flex flex-col justify-center bg-slate-100" id="projects">
            <div className="w-full max-w-[1600px] mx-auto px-[6%] lg:px-[5%]">
                <div className="mb-16 max-w-[600px]">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 leading-[1.2]">
                        Selected Works
                    </motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-slate-500 text-lg">
                        A collection of projects showcasing my philosophy in code and design.
                    </motion.p>
                </div>

                <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10 mt-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                    {/* Project 1 */}
                    <motion.div variants={fadeIn} className="bg-white border border-slate-900/10 rounded-3xl p-4 transition-all duration-400 shadow-card flex flex-col h-full hover:-translate-y-2 hover:shadow-card-hover hover:border-slate-900/15">
                        <div className="w-full h-[220px] rounded-2xl object-cover bg-slate-100 mb-6" style={{ background: 'linear-gradient(45deg, #eef2ff, #e0e7ff)' }}>
                            {/* Placeholder for project thumbnail */}
                        </div>
                        <div className="px-2 pb-4 flex flex-col flex-grow">
                            <h3 className="font-serif text-2xl mb-3 font-semibold text-slate-900">Finance Dashboard</h3>
                            <p className="text-slate-500 mb-6 text-[0.95rem] flex-grow">A comprehensive analytics dashboard handling thousands of data points with smooth rendering and interactive chart layers.</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="text-xs px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-500 font-medium border border-slate-900/10">React</span>
                                <span className="text-xs px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-500 font-medium border border-slate-900/10">TypeScript</span>
                                <span className="text-xs px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-500 font-medium border border-slate-900/10">Recharts</span>
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-transparent text-slate-900 border border-slate-900/10 hover:bg-white hover:border-slate-900 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.05)]"><Github size={16} /> Code</a>
                                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-slate-900 text-white hover:bg-slate-700 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.1)]">Live Site <ArrowRight size={16} /></a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div variants={fadeIn} className="bg-white border border-slate-900/10 rounded-3xl p-4 transition-all duration-400 shadow-card flex flex-col h-full hover:-translate-y-2 hover:shadow-card-hover hover:border-slate-900/15">
                        <div className="w-full h-[220px] rounded-2xl object-cover bg-slate-100 mb-6" style={{ background: 'linear-gradient(45deg, #f0fdf4, #dcfce7)' }}>
                            {/* Placeholder for project thumbnail */}
                        </div>
                        <div className="px-2 pb-4 flex flex-col flex-grow">
                            <h3 className="font-serif text-2xl mb-3 font-semibold text-slate-900">E-Commerce Architecture</h3>
                            <p className="text-slate-500 mb-6 text-[0.95rem] flex-grow">A highly scalable headless e-commerce store with instantaneous page transitions and a custom cart context framework.</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="text-xs px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-500 font-medium border border-slate-900/10">Next.js</span>
                                <span className="text-xs px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-500 font-medium border border-slate-900/10">Zustand</span>
                                <span className="text-xs px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-500 font-medium border border-slate-900/10">Stripe</span>
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-transparent text-slate-900 border border-slate-900/10 hover:bg-white hover:border-slate-900 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.05)]"><Github size={16} /> Code</a>
                                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-slate-900 text-white hover:bg-slate-700 hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(15,23,42,0.1)]">Live Site <ArrowRight size={16} /></a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
