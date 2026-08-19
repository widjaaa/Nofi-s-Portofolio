import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { mobileMenuVariants, navItemVariant, staggerFast } from '../utils/motion';

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'activities', label: 'Activities' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Active state scroll spy
    useEffect(() => {
        if (!isHomePage) {
            setActiveSection('');
            return;
        }

        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);

            // Auto-close mobile menu on scroll
            if (isScrolled) {
                setIsMobileMenuOpen(false);
            }

            // Cek section yang sedang aktif
            const sections = navLinks.map(link => link.id);
            const currentSection = [...sections].reverse().find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= window.innerHeight * 0.4;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            } else if (window.scrollY < 100) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    // Handle hash scrolling for Link navigation
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    // Check system preference and localStorage on initial load — default to light
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleNavClick = (id) => {
        setIsMobileMenuOpen(false);
        setActiveSection(id);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled 
                ? 'py-3 bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl border-b border-surface-200/50 dark:border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.03)]' 
                : 'py-5 bg-transparent'
        }`}>
            <div className="section-container flex justify-between items-center">
                <Link
                    to="/"
                    onClick={() => handleNavClick('home')}
                    className="flex items-center gap-2.5 group cursor-pointer"
                >
                    <img 
                        src="/images/logo/logoterbaruu.webp" 
                        alt="Nofi Logo" 
                        className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="font-heading font-bold text-sm min-[380px]:text-base md:text-lg text-surface-900 dark:text-white tracking-tight group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                        Nofi Ardiman <span className="hidden min-[480px]:inline">Widjaya</span>
                    </span>
                </Link>

                <div className="flex items-center gap-2 md:gap-8">
                    {/* Desktop nav links */}
                    <ul className="hidden md:flex gap-1 list-none bg-surface-100/60 dark:bg-surface-800/40 backdrop-blur-sm rounded-xl p-1">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={`/#${link.id}`}
                                    onClick={() => handleNavClick(link.id)}
                                    className={`relative px-3.5 py-2 rounded-lg text-[0.85rem] font-medium transition-all duration-300 block ${
                                        activeSection === link.id
                                            ? 'text-accent-600 dark:text-accent-400 font-bold bg-white dark:bg-surface-700/80 shadow-sm'
                                            : 'text-surface-500 dark:text-surface-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-white/50 dark:hover:bg-surface-700/40'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        {/* Dark mode toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="relative p-2.5 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                            aria-label="Toggle dark mode"
                        >
                            <AnimatePresence mode="wait">
                                {isDarkMode ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <Sun size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <Moon size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2.5 rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700 transition-all duration-300 active:scale-95"
                            aria-label="Toggle mobile menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <X size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Menu size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu — Full overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-surface-900/95 backdrop-blur-2xl border-b border-surface-200/50 dark:border-white/[0.06] shadow-lg"
                    >
                        <motion.ul 
                            className="flex flex-col items-center gap-2 list-none py-6 px-6"
                            variants={staggerFast}
                            initial="hidden"
                            animate="visible"
                        >
                            {navLinks.map((link) => (
                                <motion.li key={link.id} variants={navItemVariant} className="w-full">
                                    <Link
                                        to={`/#${link.id}`}
                                        onClick={() => handleNavClick(link.id)}
                                        className={`block text-center py-3 px-6 rounded-xl text-base font-heading font-medium transition-all duration-300 ${
                                            activeSection === link.id
                                                ? 'text-accent-600 dark:text-accent-400 font-bold bg-accent-500/10 dark:bg-accent-400/10'
                                                : 'text-surface-600 dark:text-surface-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-surface-50 dark:hover:bg-surface-800'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

