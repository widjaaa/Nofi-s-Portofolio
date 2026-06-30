import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { fadeIn, staggerContainer, slideInLeft, slideInRight } from '../utils/motion';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

// Environment variables (stored in .env, not committed to Git)
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaError, setCaptchaError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const recaptchaRef = useRef(null);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (!captchaToken) {
            setCaptchaError(true);
            return;
        }
        setCaptchaError(false);
        setIsSubmitting(true);
        setSubmitStatus(null);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            'g-recaptcha-response': captchaToken
        };

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setCaptchaToken(null);
            if (recaptchaRef.current) recaptchaRef.current.reset();
        })
        .catch((err) => {
            setSubmitStatus('error');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
        if (token) setCaptchaError(false);
    };

    const handleCaptchaExpired = () => {
        setCaptchaToken(null);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-12 md:py-16 lg:py-20" id="contact">
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
                                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-5">
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
                                    {/* reCAPTCHA widget */}
                                    <div className="flex flex-col items-start gap-2">
                                        {RECAPTCHA_SITE_KEY ? (
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={RECAPTCHA_SITE_KEY}
                                                onChange={handleCaptchaChange}
                                                onExpired={handleCaptchaExpired}
                                                theme="light"
                                            />
                                        ) : (
                                            <p className="text-amber-500 dark:text-amber-400 text-xs font-medium">
                                                ⚠️ reCAPTCHA is not configured.
                                            </p>
                                        )}
                                        {captchaError && (
                                            <p className="text-red-500 dark:text-red-400 text-xs font-medium animate-pulse">
                                                ⚠️ Mohon selesaikan CAPTCHA terlebih dahulu.
                                            </p>
                                        )}
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting || !captchaToken}
                                        className={`mt-1 btn-primary w-full justify-center shimmer-btn !rounded-xl transition-all flex items-center gap-2 ${
                                            (isSubmitting || !captchaToken) ? 'opacity-60 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                Sending...
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            </>
                                        ) : (
                                            <>
                                                Send Message <FaEnvelope size={18} />
                                            </>
                                        )}
                                    </button>

                                    {submitStatus === 'success' && (
                                        <p className="text-green-500 dark:text-green-400 text-sm font-medium mt-2 bg-green-500/10 border border-green-500/20 px-4 py-2.5 rounded-xl animate-fade-in text-center">
                                            🎉 Pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda.
                                        </p>
                                    )}
                                    {submitStatus === 'error' && (
                                        <p className="text-red-500 dark:text-red-400 text-sm font-medium mt-2 bg-red-500/10 border border-red-500/20 px-4 py-2.5 rounded-xl animate-fade-in text-center">
                                            ❌ Gagal mengirim pesan. Silakan coba lagi nanti.
                                        </p>
                                    )}
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
