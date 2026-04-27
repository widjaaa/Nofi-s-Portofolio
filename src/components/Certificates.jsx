import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/motion';

import { certificatesData } from '../data/certificatesData';

const Certificates = () => {
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
        <section className="py-12 md:py-24 lg:py-28 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-center" id="certificates">
            <div className="w-full max-w-[1600px] mx-auto px-[6%] lg:px-[5%]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-[600px]">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 dark:text-white leading-[1.2]"
                        >
                            Licenses & Certifications
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="text-slate-500 dark:text-slate-400 text-lg"
                        >
                            Valuable credentials that validate my expertise, commitment to learning, and professional standards.
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
                        className="flex items-stretch overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 -mx-[6%] px-[6%] lg:-mx-[5%] lg:px-[5%] cursor-grab active:cursor-grabbing"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {/* Hide webkit scrollbar via a style tag injected in the component */}
                        <style>{`
                            #certificates .flex::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {certificatesData.map((cert) => (
                            <motion.div
                                key={cert.id}
                                variants={fadeIn}
                                className="group relative rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-900/5 dark:border-white/5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden shrink-0 snap-center w-[85vw] sm:w-[350px]"
                            >
                                {/* Certificate Image Top Section */}
                                <div
                                    className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer group/image"
                                    onClick={() => setSelectedImage(cert.image)}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                        <span className="bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-md transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300">
                                            Click to view
                                        </span>
                                    </div>
                                </div>

                                {/* Content Lower Section */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                                    {/* Floating Icon */}

                                    <div className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-2 mt-2">
                                        {cert.issuer}
                                    </div>

                                    <h3 className="font-serif text-xl font-semibold text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                        {cert.title}
                                    </h3>

                                    <div className="text-slate-400 dark:text-slate-500 text-sm mb-6 flex-grow">
                                        Issued {cert.date}
                                    </div>

                                    {cert.validationUrl !== '#' && (
                                        <a
                                            href={cert.validationUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors mt-auto w-max"
                                        >
                                            Show credential <ExternalLink size={16} />
                                        </a>
                                    )}
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
                            alt="Full screen certificate"
                            className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
