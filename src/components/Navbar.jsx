import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
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

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-50/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-900/10 dark:border-white/10' : 'py-6'}`}>
            <div className="w-full max-w-[1600px] mx-auto px-[5%] flex justify-between items-center">
                <a href="#" className="font-serif text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Nofi<span className="text-teal-600 dark:text-teal-400">.</span>
                </a>
                
                <div className="flex items-center gap-4 md:gap-10">
                    <ul className="hidden md:flex gap-10 list-none">
                        <li><a href="#about" className="text-slate-500 dark:text-slate-400 font-medium text-[0.95rem] transition-colors hover:text-slate-900 dark:hover:text-white">About</a></li>
                        <li><a href="#experience" className="text-slate-500 dark:text-slate-400 font-medium text-[0.95rem] transition-colors hover:text-slate-900 dark:hover:text-white">Experience</a></li>
                        <li><a href="#projects" className="text-slate-500 dark:text-slate-400 font-medium text-[0.95rem] transition-colors hover:text-slate-900 dark:hover:text-white">Projects</a></li>
                        <li><a href="#activities" className="text-slate-500 dark:text-slate-400 font-medium text-[0.95rem] transition-colors hover:text-slate-900 dark:hover:text-white">Activities</a></li>
                        <li><a href="#certificates" className="text-slate-500 dark:text-slate-400 font-medium text-[0.95rem] transition-colors hover:text-slate-900 dark:hover:text-white">Certificates</a></li>
                        <li><a href="#contact" className="text-slate-500 dark:text-slate-400 font-medium text-[0.95rem] transition-colors hover:text-slate-900 dark:hover:text-white">Contact</a></li>
                    </ul>

                    <div className="flex items-center gap-3">
                        {/* Dark Mode Toggle */}
                        <button 
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Hamburger Menu Toggle (Mobile) */}
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
                    <li><a href="#about" onClick={handleNavClick} className="text-slate-500 dark:text-slate-400 font-medium text-[1.1rem] transition-colors hover:text-teal-600 dark:hover:text-teal-400">About</a></li>
                    <li><a href="#experience" onClick={handleNavClick} className="text-slate-500 dark:text-slate-400 font-medium text-[1.1rem] transition-colors hover:text-teal-600 dark:hover:text-teal-400">Experience</a></li>
                    <li><a href="#projects" onClick={handleNavClick} className="text-slate-500 dark:text-slate-400 font-medium text-[1.1rem] transition-colors hover:text-teal-600 dark:hover:text-teal-400">Projects</a></li>
                    <li><a href="#activities" onClick={handleNavClick} className="text-slate-500 dark:text-slate-400 font-medium text-[1.1rem] transition-colors hover:text-teal-600 dark:hover:text-teal-400">Activities</a></li>
                    <li><a href="#certificates" onClick={handleNavClick} className="text-slate-500 dark:text-slate-400 font-medium text-[1.1rem] transition-colors hover:text-teal-600 dark:hover:text-teal-400">Certificates</a></li>
                    <li><a href="#contact" onClick={handleNavClick} className="text-slate-500 dark:text-slate-400 font-medium text-[1.1rem] transition-colors hover:text-teal-600 dark:hover:text-teal-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
