import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[55] w-12 h-12 rounded-2xl bg-surface-900 dark:bg-white text-white dark:text-surface-900 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 group"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
