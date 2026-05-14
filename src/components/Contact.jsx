import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { fadeIn, staggerContainer, slideInLeft, slideInRight } from '../utils/motion';

const socialLinks = [
    { icon: FaEnvelope, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=wijayanovi329@gmail.com', hoverColor: 'hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/widjaaa', hoverColor: 'hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nofi-ardiman-widjaya/', hoverColor: 'hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/nofi_ardw/', hoverColor: 'hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20' },
    { icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@orangkampung_20', hoverColor: 'hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@nofiardimanw', hoverColor: 'hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20' },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "6281299735756";
        const text = `Halo Nofi, saya ${formData.name} (${formData.email}).\n\n${formData.message}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-20 md:py-28 lg:py-32" id="contact">
            <div className="section-container max-w-[1100px]">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                    {/* Section header */}
                    <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                        <div className="accent-line" />
                        <span className="text-[#1e3a8a] dark:text-[#60a5fa] font-heading font-semibold text-sm uppercase tracking-wider">Contact</span>
                    </motion.div>

                    {/* Contact card */}
                    <motion.div variants={fadeIn} className="glass-card p-6 sm:p-8 md:p-10 lg:p-14 shadow-card hover:shadow-card-hover dark:shadow-card-dark transition-all duration-500 rounded-3xl relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-400/10 dark:bg-accent-400/[0.05] rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-highlight-400/10 dark:bg-highlight-400/[0.05] rounded-full blur-[60px] pointer-events-none" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
                            {/* Left — Info */}
                            <motion.div variants={slideInLeft} className="flex flex-col justify-center">
                                <h2 className="section-heading mb-5">
                                    Let's build something{' '}
                                    <span className="gradient-text dark:hidden">brilliant</span>
                                    <span className="hidden dark:inline gradient-text-dark">brilliant</span>
                                    {' '}together.
                                </h2>
                                <p className="text-surface-500 dark:text-surface-400 text-lg mb-10 leading-relaxed max-w-[440px]">
                                    Whether you have a specific project in mind or just want to chat about the future of web tech, I'm always open to talking.
                                </p>

                                {/* Social links */}
                                <div className="flex flex-wrap gap-3">
                                    {socialLinks.map((s) => (
                                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                                            className={`group w-11 h-11 flex items-center justify-center rounded-xl text-surface-400 dark:text-surface-500 transition-all duration-300 border border-surface-200/50 dark:border-surface-700/50 hover:-translate-y-1 hover:shadow-md ${s.hoverColor}`}
                                        >
                                            <s.icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right — Form */}
                            <motion.div variants={slideInRight}>
                                <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-5">
                                    <div className="input-sweep relative">
                                        <label htmlFor="name" className="block text-xs font-heading font-semibold text-surface-500 dark:text-surface-400 mb-2 uppercase tracking-wider">Name</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name"
                                            className="w-full px-4 py-3.5 rounded-xl border border-surface-200 dark:border-surface-700 focus:outline-none focus:border-accent-400 dark:focus:border-accent-500 transition-colors bg-surface-50/50 dark:bg-surface-900/50 text-surface-900 dark:text-white placeholder:text-surface-300 dark:placeholder:text-surface-600 text-sm" required />
                                    </div>
                                    <div className="input-sweep relative">
                                        <label htmlFor="email" className="block text-xs font-heading font-semibold text-surface-500 dark:text-surface-400 mb-2 uppercase tracking-wider">Email Address</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com"
                                            className="w-full px-4 py-3.5 rounded-xl border border-surface-200 dark:border-surface-700 focus:outline-none focus:border-accent-400 dark:focus:border-accent-500 transition-colors bg-surface-50/50 dark:bg-surface-900/50 text-surface-900 dark:text-white placeholder:text-surface-300 dark:placeholder:text-surface-600 text-sm" required />
                                    </div>
                                    <div className="input-sweep relative">
                                        <label htmlFor="message" className="block text-xs font-heading font-semibold text-surface-500 dark:text-surface-400 mb-2 uppercase tracking-wider">Your Message</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can I help you?"
                                            className="w-full px-4 py-3.5 rounded-xl border border-surface-200 dark:border-surface-700 focus:outline-none focus:border-accent-400 dark:focus:border-accent-500 transition-colors resize-none bg-surface-50/50 dark:bg-surface-900/50 text-surface-900 dark:text-white placeholder:text-surface-300 dark:placeholder:text-surface-600 text-sm" required />
                                    </div>
                                    <button type="submit" className="mt-1 btn-primary w-full justify-center shimmer-btn !rounded-xl">
                                        Send via WhatsApp <FaWhatsapp size={18} />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
