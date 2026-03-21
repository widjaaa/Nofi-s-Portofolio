import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import { activitiesData } from '../data/activitiesData';

const Activities = () => {
    const scrollContainerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -380 : 380;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 md:py-24 lg:py-28 flex flex-col justify-center" id="activities">
            <div className="w-full max-w-[1600px] mx-auto px-[6%] lg:px-[5%]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-[600px]">
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 dark:text-white leading-[1.2]">
                            Activities & Moments
                        </motion.h2>
                        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-slate-500 dark:text-slate-400 text-lg">
                            A glimpse into my involvements, speaking engagements, and community events.
                        </motion.p>
                    </div>
                </div>

                <div className="relative w-full group/slider">
                    {/* Floating Navigation Buttons */}
                    <button 
                        onClick={() => scroll('left')} 
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-900/10 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 opacity-0 group-hover/slider:opacity-100 hidden sm:flex"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={() => scroll('right')} 
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-900/10 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 opacity-0 group-hover/slider:opacity-100 hidden sm:flex"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <motion.div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 -mx-[6%] px-[6%] lg:-mx-[5%] lg:px-[5%] cursor-grab active:cursor-grabbing"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, margin: "-50px" }} 
                        variants={staggerContainer}
                    >
                        {/* Hide webkit scrollbar via a style tag injected in the component */}
                        <style>{`
                            #activities .flex::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        
                        {activitiesData.map((activity) => (
                            <motion.div 
                                key={activity.id} 
                                variants={fadeIn} 
                                className={`group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 shrink-0 snap-center w-[75vw] sm:w-[50vw] md:w-[380px] h-[300px] md:h-[420px] ${activity.span} ${activity.image ? 'cursor-pointer' : ''}`}
                                onClick={() => activity.image && setSelectedImage(activity.image)}
                            >
                                {/* Photo Placeholder or Actual Image */}
                                {activity.image ? (
                                    <img src={activity.image} alt={activity.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                ) : (
                                    <div className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ background: activity.bgGrad }}></div>
                                )}
                                
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1.5 mb-3 md:mb-4 text-[0.75rem] md:text-[0.8rem] font-medium tracking-wide rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                                            {activity.date}
                                        </span>
                                        <h3 className="font-serif text-[1.4rem] md:text-[1.75rem] font-semibold mb-2 leading-tight">{activity.title}</h3>
                                        <p className="text-white/80 text-sm md:text-[0.95rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Full Screen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-slate-900/90 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 p-2 rounded-full backdrop-blur-md"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close modal"
                        >
                            <X size={32} />
                        </button>
                        
                        <motion.img 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selectedImage} 
                            alt="Full screen activity" 
                            className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Activities;
