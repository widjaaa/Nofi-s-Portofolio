import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-50/85 backdrop-blur-md border-b border-slate-900/10' : 'py-6'}`}>
            <div className="w-full max-w-[1600px] mx-auto px-[5%] flex justify-between items-center">
                <a href="#" className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                    Nofi<span className="text-teal-600">.</span>
                </a>
                <ul className="hidden md:flex gap-10 list-none">
                    <li><a href="#about" className="text-slate-500 font-medium text-[0.95rem] transition-colors hover:text-slate-900">About</a></li>
                    <li><a href="#experience" className="text-slate-500 font-medium text-[0.95rem] transition-colors hover:text-slate-900">Experience</a></li>
                    <li><a href="#projects" className="text-slate-500 font-medium text-[0.95rem] transition-colors hover:text-slate-900">Projects</a></li>
                    <li><a href="#contact" className="text-slate-500 font-medium text-[0.95rem] transition-colors hover:text-slate-900">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
