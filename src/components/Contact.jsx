import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../utils/motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        // Anda bisa mengganti nomor ini dengan nomor WhatsApp yang aktif (+62...)
        const phoneNumber = "6281299735756";
        const text = `Halo Nofi, saya ${formData.name} (${formData.email}).\n\n${formData.message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-12 md:py-24 lg:py-28 flex flex-col justify-center" id="contact">
            <div className="w-full max-w-[1200px] mx-auto px-[6%] lg:px-[5%]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="bg-white dark:bg-slate-900 border border-slate-900/10 dark:border-white/10 rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Kolom Kiri - Informasi & Media Sosial */}
                        <div className="flex flex-col justify-center">

                            <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-[2.5rem] mb-6 font-semibold text-slate-900 dark:text-white leading-[1.2]">
                                Let's build something brilliant together.
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-slate-500 dark:text-slate-400 text-lg mb-12 max-w-[500px]">
                                Whether you have a specific project in mind or just want to chat about the future of web tech, I'm always open to talking. Drop me a message!
                            </motion.p>

                            {/* Tombol Media Sosial */}
                            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mt-auto">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wijayanovi329@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 transition-all duration-300 border border-transparent hover:bg-white dark:hover:bg-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-slate-900/10 dark:hover:border-white/10 hover:-translate-y-1 hover:shadow-md"><FaEnvelope size={20} /></a>
                                <a href="https://github.com/widjaaa" target="_blank" rel="noopener noreferrer" aria-label="Github" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 transition-all duration-300 border border-transparent hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white hover:border-slate-900/10 dark:hover:border-white/10 hover:-translate-y-1 hover:shadow-md"><FaGithub size={20} /></a>
                                <a href="https://www.linkedin.com/in/nofi-ardiman-widjaya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 transition-all duration-300 border border-transparent hover:bg-white dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-900/10 dark:hover:border-white/10 hover:-translate-y-1 hover:shadow-md"><FaLinkedin size={20} /></a>
                                <a href="https://www.instagram.com/nofi_ardw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 transition-all duration-300 border border-transparent hover:bg-white dark:hover:bg-slate-700 hover:text-pink-600 dark:hover:text-pink-400 hover:border-slate-900/10 dark:hover:border-white/10 hover:-translate-y-1 hover:shadow-md"><FaInstagram size={20} /></a>
                                <a href="https://www.tiktok.com/@orangkampung_20" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 transition-all duration-300 border border-transparent hover:bg-white dark:hover:bg-slate-700 hover:text-black dark:hover:text-white hover:border-slate-900/10 dark:hover:border-white/10 hover:-translate-y-1 hover:shadow-md"><FaTiktok size={20} /></a>
                                <a href="https://www.youtube.com/@nofiardimanw" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 transition-all duration-300 border border-transparent hover:bg-white dark:hover:bg-slate-700 hover:text-red-600 dark:hover:text-red-400 hover:border-slate-900/10 dark:hover:border-white/10 hover:-translate-y-1 hover:shadow-md"><FaYoutube size={20} /></a>
                            </motion.div>
                        </div>

                        {/* Kolom Kanan - Form Kontak (Direct to WhatsApp) */}
                        <motion.div variants={fadeIn} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-900/5 dark:border-white/5">
                            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="your name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="How can I help you?"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors resize-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="mt-2 inline-flex items-center justify-center w-full gap-3 px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 bg-emerald-500 text-white hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)]">
                                    Send via WhatsApp <FaWhatsapp size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
