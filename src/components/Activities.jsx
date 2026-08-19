import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer, scaleUp } from '../utils/motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { activitiesData } from '../data/activitiesData';

const Activities = () => {
    const scrollContainerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const card = current.firstElementChild;
            const step = card ? card.offsetWidth + 20 : 400; // 20 is gap-5 (1.25rem)
            const scrollAmount = direction === 'left' ? -step : step;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Track active slide for dot navigation
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        
        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const card = container.firstElementChild;
            const step = card ? card.offsetWidth + 20 : 400;
            const index = Math.round(scrollLeft / step);
            setActiveIndex(Math.min(index, activitiesData.length - 1));
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToIndex = (index) => {
        if (scrollContainerRef.current) {
            const card = scrollContainerRef.current.firstElementChild;
            const step = card ? card.offsetWidth + 20 : 400;
            scrollContainerRef.current.scrollTo({ left: index * step, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 md:py-16 lg:py-20" id="activities">
            <div className="section-container">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[560px]">
                        <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                            <div className="accent-line" />
                            <span className="text-accent-600 dark:text-accent-400 font-heading font-semibold text-sm uppercase tracking-wider">Gallery</span>
                        </motion.div>
                        <motion.h2 variants={fadeIn} className="section-heading mb-4">
                            Activities & Moments
                        </motion.h2>
                        <motion.p variants={fadeIn} className="section-subtext">
                            A glimpse into my involvements, speaking engagements, and community events.
                        </motion.p>
                    </motion.div>

                    {/* Navigation arrows — desktop */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="hidden sm:flex gap-2">
                        <button 
                            onClick={() => scroll('left')} 
                            className="p-3 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-accent-500/10 dark:hover:bg-accent-400/10 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 active:scale-95 border border-surface-200/50 dark:border-surface-700/50"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={() => scroll('right')} 
                            className="p-3 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-accent-500/10 dark:hover:bg-accent-400/10 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 active:scale-95 border border-surface-200/50 dark:border-surface-700/50"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </motion.div>
                </div>

                {/* Horizontal scroll carousel */}
                <motion.div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 scrollbar-hide cursor-grab active:cursor-grabbing"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-50px" }} 
                    variants={staggerContainer}
                >
                    {activitiesData.map((activity) => (
                        <motion.div 
                            key={activity.id} 
                            variants={scaleUp} 
                            className={`group relative rounded-2xl overflow-hidden shrink-0 snap-center w-[80vw] sm:w-[50vw] md:w-[380px] h-[280px] sm:h-[320px] md:h-[420px] ${activity.image ? 'cursor-pointer' : ''}`}
                            onClick={() => activity.image && setSelectedImage(activity.image)}
                        >
                            {/* Image or gradient */}
                            {activity.image ? (
                                <img 
                                    src={activity.image} 
                                    alt={activity.title} 
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                                />
                            ) : (
                                <div className="absolute inset-0 w-full h-full" style={{ background: activity.bgGrad }} />
                            )}
                            
                            {/* Cinematic dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end text-white">
                                <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                                    {activity.date && activity.date.toLowerCase() !== 'recent' && (
                                        <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-heading font-semibold tracking-wider rounded-lg bg-white/15 backdrop-blur-md border border-white/20">
                                            {activity.date}
                                        </span>
                                    )}
                                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 leading-tight">
                                        {activity.title}
                                    </h3>
                                    <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-all duration-400 delay-100 leading-relaxed line-clamp-2">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Dot navigation */}
                <div className="flex justify-center gap-1.5 mt-6">
                    {activitiesData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`dot-nav-item ${index === activeIndex ? 'active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Full Screen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-surface-900/90 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-xl backdrop-blur-md"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                        
                        <motion.img 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selectedImage} 
                            alt="Full screen activity" 
                            className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Activities;
