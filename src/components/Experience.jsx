import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from '../utils/motion';

const experiences = [
    {
        date: 'Nov 15 – Nov 19, 2025',
        title: 'Graphic Designer',
        type: '(Contract)',
        company: 'PT. Cipta Megah Lestarindo, Tangerang',
        points: [
            'Completed a visual design project for a plastic processing machine marketing brochure within a tight deadline.',
            'Collaborate with the marketing team to ensure brand identity consistency in every design asset produced.',
        ],
        image: '/images/activities/graphic.png',
    },
    {
        date: 'Oct 2024 – Oct 2025',
        title: 'Web Developer',
        type: '',
        company: 'President University Student Council, Cikarang',
        points: [
            'Weekly website maintenance, checking for security vulnerabilities and bugs.',
            'Successfully integrated from native PHP to the Laravel framework.',
        ],
        image: '/images/activities/webdev.png',
    },
];

// Image showcase component
const ExperienceImage = ({ src, alt }) => (
    <div className="w-full relative rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-surface-200/50 dark:border-surface-700/50 group aspect-[16/10] bg-surface-100 dark:bg-surface-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
    </div>
);

// Card content component (reused for both sides)
const ExperienceCard = ({ exp }) => (
    <div className="glass-card p-5 sm:p-6 rounded-xl hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 hover:-translate-y-0.5">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-heading font-semibold rounded-lg bg-[#1e3a8a]/5 dark:bg-[#60a5fa]/10 border border-[#1e3a8a]/20 dark:border-[#60a5fa]/20 text-[#1e3a8a] dark:text-[#60a5fa]">
            {exp.date}
        </span>
        <h3 className="font-heading text-lg font-bold text-surface-900 dark:text-white mb-1">
            {exp.title}
            {exp.type && <span className="text-surface-400 dark:text-surface-500 font-normal text-base ml-1">{exp.type}</span>}
        </h3>
        <p className="text-[#1e3a8a] dark:text-[#60a5fa] text-sm font-medium mb-3">
            {exp.company}
        </p>
        <ul className="text-[0.9rem] text-surface-500 dark:text-surface-400 space-y-2">
            {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] dark:bg-[#60a5fa] mt-2 shrink-0" />
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const Experience = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20" id="experience">
            <div className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
                    {/* Section label */}
                    <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                        <div className="accent-line" />
                        <span className="text-[#1e3a8a] dark:text-[#60a5fa] font-heading font-semibold text-sm uppercase tracking-wider">Experience</span>
                    </motion.div>

                    <motion.h2 variants={slideInLeft} className="section-heading mb-10">
                        My professional journey
                    </motion.h2>

                    {/* Alternating Timeline */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Center line - visible on lg+ */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1e3a8a]/20 dark:bg-[#60a5fa]/20 -translate-x-1/2" />

                        {/* Mobile line - left side */}
                        <div className="lg:hidden absolute left-[15px] top-0 bottom-0 w-0.5 bg-[#1e3a8a]/20 dark:bg-[#60a5fa]/20" />

                        <div className="flex flex-col gap-12 lg:gap-16">
                            {experiences.map((exp, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={index}
                                        variants={isLeft ? slideInLeft : slideInRight}
                                        className="relative"
                                    >
                                        {/* Desktop layout (lg+) - alternating columns */}
                                        <div className="hidden lg:grid lg:grid-cols-[1fr_40px_1fr] items-center">
                                            {/* Left Column */}
                                            <div className="flex justify-end">
                                                {isLeft ? (
                                                    <div className="w-full max-w-[450px] pr-8">
                                                        <ExperienceCard exp={exp} />
                                                    </div>
                                                ) : (
                                                    <div className="w-full max-w-[450px] pr-8">
                                                        <ExperienceImage src={exp.image} alt={exp.title} />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Center Dot */}
                                            <div className="flex justify-center">
                                                <div className="w-4 h-4 rounded-full border-[3px] border-[#1e3a8a] dark:border-[#60a5fa] bg-white dark:bg-surface-900 z-10" />
                                            </div>

                                            {/* Right Column */}
                                            <div className="flex justify-start">
                                                {!isLeft ? (
                                                    <div className="w-full max-w-[450px] pl-8">
                                                        <ExperienceCard exp={exp} />
                                                    </div>
                                                ) : (
                                                    <div className="w-full max-w-[450px] pl-8">
                                                        <ExperienceImage src={exp.image} alt={exp.title} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Mobile layout (< lg) - stacked left-aligned */}
                                        <div className="lg:hidden flex flex-col gap-4 pl-8">
                                            {/* Mobile Dot (on left line) */}
                                            <div className="absolute left-[10px] top-8 w-[11px] h-[11px] rounded-full border-2 border-[#1e3a8a] dark:border-[#60a5fa] bg-white dark:bg-surface-900 z-10" />

                                            {/* Card */}
                                            <ExperienceCard exp={exp} />

                                            {/* Embedded Image for Mobile */}
                                            {exp.image && (
                                                <div className="w-full relative rounded-xl overflow-hidden shadow-card border border-surface-200/50 dark:border-surface-700/50 aspect-[16/10]">
                                                    <img
                                                        src={exp.image}
                                                        alt={exp.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
