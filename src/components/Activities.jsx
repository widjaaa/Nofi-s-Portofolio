import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const activities = [
    {
        id: 1,
        title: 'Speaker at Tech Meetup',
        date: 'Oct 2025',
        description: 'Sharing insights about modern frontend architectures to over 200 developers.',
        bgGrad: 'linear-gradient(45deg, #FF9A9E, #FECFEF)',
        span: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
        id: 2,
        title: 'Hackathon Winner',
        date: 'Aug 2025',
        description: 'Built a sustainable energy tracker over a weekend.',
        bgGrad: 'linear-gradient(135deg, #667EEA, #764BA2)',
        span: 'col-span-1 row-span-1'
    },
    {
        id: 3,
        title: 'Mentoring Bootcamp',
        date: 'Jun 2025',
        description: 'Guiding junior developers in React and Tailwind CSS.',
        bgGrad: 'linear-gradient(to right, #4FACFE, #00F2FE)',
        span: 'col-span-1 row-span-2'
    },
    {
        id: 4,
        title: 'Cybersecurity Workshop',
        date: 'Mar 2025',
        description: 'Attended advanced networking and penetration testing workshop.',
        bgGrad: 'linear-gradient(to top, #0BA360, #3CBA92)',
        span: 'col-span-1 row-span-1'
    },
    {
        id: 5,
        title: 'Team Building Retreat',
        date: 'Dec 2024',
        description: 'Annual getaway with the engineering team.',
        bgGrad: 'linear-gradient(120deg, #F6D365, #FDA085)',
        span: 'col-span-1 md:col-span-2 row-span-1'
    }
];

const Activities = () => {
    return (
        <section className="py-12 md:py-24 lg:py-28 flex flex-col justify-center" id="activities">
            <div className="w-full max-w-[1600px] mx-auto px-[6%] lg:px-[5%]">
                <div className="mb-16 max-w-[600px]">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="font-serif text-4xl lg:text-[2.5rem] mb-4 font-semibold text-slate-900 dark:text-white leading-[1.2]">
                        Activities & Moments
                    </motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-slate-500 dark:text-slate-400 text-lg">
                        A glimpse into my involvements, speaking engagements, and community events.
                    </motion.p>
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
                            #activities .flex::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        
                        {activities.map((activity) => (
                            <motion.div 
                                key={activity.id} 
                                variants={fadeIn} 
                                className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 shrink-0 snap-center w-[75vw] sm:w-[50vw] md:w-[380px] h-[300px] md:h-[420px]"
                            >
                                {/* Photo Placeholder */}
                                <div className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ background: activity.bgGrad }}></div>
                                
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
        </section>
    );
};

export default Activities;
