import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/motion';

const certificates = [
    {
        id: 1,
        title: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: 'Oct 2025',
        validationUrl: '#',
        iconColor: 'text-[#FF9900]',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Meta Front-End Developer',
        issuer: 'Coursera / Meta',
        date: 'Aug 2024',
        validationUrl: '#',
        iconColor: 'text-[#0668E1]',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Certified Ethical Hacker (CEH)',
        issuer: 'EC-Council',
        date: 'Jun 2024',
        validationUrl: '#',
        iconColor: 'text-[#D02128]',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Google UX Design Professional Certificate',
        issuer: 'Google',
        date: 'Feb 2024',
        validationUrl: '#',
        iconColor: 'text-[#4285F4]',
        image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop'
    }
];

const Certificates = () => {
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

                <div className="relative w-full">
                    <motion.div 
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 -mx-[6%] px-[6%] lg:-mx-[5%] lg:px-[5%] cursor-grab active:cursor-grabbing"
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
                        
                        {certificates.map((cert) => (
                            <motion.div 
                                key={cert.id} 
                                variants={fadeIn} 
                                className="group relative rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-900/5 dark:border-white/5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden shrink-0 snap-center w-[85vw] sm:w-[350px]"
                            >
                                {/* Certificate Image Top Section */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content Lower Section */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                                    {/* Floating Icon */}
                                    <div className={`absolute -top-8 right-6 p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 ${cert.iconColor} z-10 transition-transform duration-300 group-hover:-translate-y-1`}>
                                        <Award size={24} strokeWidth={2} />
                                    </div>
                                    
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
        </section>
    );
};

export default Certificates;
