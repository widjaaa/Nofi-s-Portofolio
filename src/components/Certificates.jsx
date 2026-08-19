import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { fadeIn, staggerContainer, scaleUp } from '../utils/motion';
import { certificatesData } from '../data/certificatesData';

const Certificates = () => {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const scroll = (dir) => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.querySelector('.cert-card');
        const step = card ? card.offsetWidth + 20 : 370; // 20 is gap-5 (1.25rem)
        scrollRef.current.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const onScroll = () => {
            const card = el.querySelector('.cert-card');
            const step = card ? card.offsetWidth + 20 : 370;
            setActiveIdx(Math.min(Math.round(el.scrollLeft / step), certificatesData.length - 1));
        };
        el.addEventListener('scroll', onScroll, { passive: true });
        return () => el.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section className="py-12 md:py-16 lg:py-20 relative" id="certificates">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-100/50 via-surface-50 to-surface-100/50 dark:from-surface-800/30 dark:via-surface-900 dark:to-surface-800/30 -z-10" />
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[560px]">
                        <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                            <div className="accent-line" />
                            <span className="text-accent-600 dark:text-accent-400 font-heading font-semibold text-sm uppercase tracking-wider">Credentials</span>
                        </motion.div>
                        <motion.h2 variants={fadeIn} className="section-heading mb-4">Licenses & Certifications</motion.h2>
                        <motion.p variants={fadeIn} className="section-subtext">Valuable credentials that validate my expertise and commitment to learning.</motion.p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="hidden sm:flex gap-2">
                        <button onClick={() => scroll('left')} className="p-3 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-500 hover:bg-accent-500/10 dark:hover:bg-accent-400/10 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 active:scale-95 border border-surface-200/50 dark:border-surface-700/50" aria-label="Scroll left"><ChevronLeft size={20} /></button>
                        <button onClick={() => scroll('right')} className="p-3 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-500 hover:bg-accent-500/10 dark:hover:bg-accent-400/10 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300 active:scale-95 border border-surface-200/50 dark:border-surface-700/50" aria-label="Scroll right"><ChevronRight size={20} /></button>
                    </motion.div>
                </div>

                <motion.div ref={scrollRef} className="flex items-stretch overflow-x-auto snap-x snap-mandatory gap-5 pb-6 scrollbar-hide cursor-grab active:cursor-grabbing" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
                    {certificatesData.map((cert) => (
                        <motion.div key={cert.id} variants={scaleUp} className="cert-card group rounded-2xl bg-white dark:bg-surface-800/70 border border-surface-200/60 dark:border-surface-700/40 shadow-card hover:shadow-card-hover dark:shadow-card-dark transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden shrink-0 snap-center w-[85vw] sm:w-[340px]">
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-100 dark:bg-surface-900 cursor-pointer group/image" onClick={() => setSelectedImage(cert.image)}>
                                <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-accent-600/10 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                    <span className="bg-white/90 dark:bg-surface-900/90 text-surface-900 dark:text-white px-4 py-2 rounded-xl text-xs font-heading font-semibold shadow-lg backdrop-blur-md translate-y-3 group-hover/image:translate-y-0 transition-all duration-300">Click to view</span>
                                </div>
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                <span className="inline-flex items-center self-start px-2.5 py-1 mb-3 text-xs font-heading font-semibold rounded-lg bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300">{cert.issuer}</span>
                                <h3 className="font-heading text-base sm:text-lg font-bold text-surface-900 dark:text-white mb-3 leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-2">{cert.title}</h3>
                                <div className="text-surface-400 text-xs font-medium mb-4 flex-grow">Issued {cert.date}</div>
                                {cert.validationUrl !== '#' && (
                                    <a href={cert.validationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 transition-colors mt-auto w-max">
                                        Show credential <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex justify-center gap-1.5 mt-6">
                    {certificatesData.map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => { 
                                if (scrollRef.current) {
                                    const card = scrollRef.current.querySelector('.cert-card');
                                    const step = card ? card.offsetWidth + 20 : 370;
                                    scrollRef.current.scrollTo({ left: i * step, behavior: 'smooth' });
                                }
                            }} 
                            className={`dot-nav-item ${i === activeIdx ? 'active' : ''}`} 
                            aria-label={`Certificate ${i + 1}`} 
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-surface-900/90 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
                        <button className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-xl backdrop-blur-md transition-colors" onClick={() => setSelectedImage(null)} aria-label="Close"><X size={24} /></button>
                        <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} src={selectedImage} alt="Certificate" className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
