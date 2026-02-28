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
                    className="bg-white border border-slate-900/10 rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Kolom Kiri - Informasi & Media Sosial */}
                        <div className="flex flex-col justify-center">
                            <motion.div variants={fadeIn} className="inline-block mb-4 text-teal-600">
                                <Sparkles size={32} />
                            </motion.div>
                            <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-[2.5rem] mb-6 font-semibold text-slate-900 leading-[1.2]">
                                Let's build something brilliant together.
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-slate-500 text-lg mb-12 max-w-[500px]">
                                Whether you have a specific project in mind or just want to chat about the future of web tech, I'm always open to talking. Drop me a message!
                            </motion.p>

                            {/* Tombol Media Sosial */}
                            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mt-auto">
                                <a href="mailto:wijayanovi329@gmail.com" aria-label="Email" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 bg-slate-50 transition-all duration-300 border border-transparent hover:bg-white hover:text-emerald-600 hover:border-slate-900/10 hover:-translate-y-1 hover:shadow-md"><FaEnvelope size={20} /></a>
                                <a href="https://github.com/widjaaa" aria-label="Github" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 bg-slate-50 transition-all duration-300 border border-transparent hover:bg-white hover:text-slate-900 hover:border-slate-900/10 hover:-translate-y-1 hover:shadow-md"><FaGithub size={20} /></a>
                                <a href="https://www.linkedin.com/in/nofi-ardiman-widjaya/" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 bg-slate-50 transition-all duration-300 border border-transparent hover:bg-white hover:text-blue-600 hover:border-slate-900/10 hover:-translate-y-1 hover:shadow-md"><FaLinkedin size={20} /></a>
                                <a href="https://www.instagram.com/nofi_ardw/" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 bg-slate-50 transition-all duration-300 border border-transparent hover:bg-white hover:text-pink-600 hover:border-slate-900/10 hover:-translate-y-1 hover:shadow-md"><FaInstagram size={20} /></a>
                                <a href="https://www.tiktok.com/@orangkampung_20" aria-label="TikTok" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 bg-slate-50 transition-all duration-300 border border-transparent hover:bg-white hover:text-black hover:border-slate-900/10 hover:-translate-y-1 hover:shadow-md"><FaTiktok size={20} /></a>
                                <a href="https://www.youtube.com/@nofiardimanw" aria-label="YouTube" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 bg-slate-50 transition-all duration-300 border border-transparent hover:bg-white hover:text-red-600 hover:border-slate-900/10 hover:-translate-y-1 hover:shadow-md"><FaYoutube size={20} /></a>
                            </motion.div>
                        </div>

                        {/* Kolom Kanan - Form Kontak (Direct to WhatsApp) */}
                        <motion.div variants={fadeIn} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-900/5">
                            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="your name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors bg-white text-slate-900 placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors bg-white text-slate-900 placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="How can I help you?"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-colors resize-none bg-white text-slate-900 placeholder:text-slate-400"
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
