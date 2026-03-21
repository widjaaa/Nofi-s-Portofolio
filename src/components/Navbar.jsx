import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

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

    // Active state scroll spy
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

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
    }, []);

    // Check system preference and localStorage on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-50/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-900/10 dark:border-white/10' : 'py-6'}`}>
            <div className="w-full max-w-[1600px] mx-auto px-[5%] flex justify-between items-center">
                <a href="#" className="font-serif text-2xl font-bold text-slate-900 dark:text-white tracking-tight" onClick={() => handleNavClick('')}>
                    Nofi<span className="text-teal-600 dark:text-teal-400">.</span>
                </a>
                
                <div className="flex items-center gap-4 md:gap-10">
                    <ul className="hidden md:flex gap-10 list-none">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`} 
                                    onClick={() => handleNavClick(link.id)}
                                    className={`relative font-medium text-[0.95rem] transition-all duration-300 py-1 ${
                                        activeSection === link.id 
                                            ? 'text-teal-600 dark:text-teal-400 font-semibold' 
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                    {/* Indicator dot */}
                                    {activeSection === link.id && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-900/10 dark:border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] py-6 shadow-xl' : 'max-h-0 py-0'}`}>
                <ul className="flex flex-col items-center gap-6 list-none px-[5%]">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a 
                                href={`#${link.id}`} 
                                onClick={() => handleNavClick(link.id)} 
                                className={`text-[1.1rem] transition-colors ${
                                    activeSection === link.id 
                                        ? 'text-teal-600 dark:text-teal-400 font-semibold' 
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
