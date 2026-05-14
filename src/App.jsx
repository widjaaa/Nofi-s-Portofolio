import React from 'react';
import './App.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutExperience from './components/AboutExperience';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="relative noise-overlay">
            {/* Background orbs removed for strictly clean B&W background */}
            <Navbar />
            <main>
                <Hero />
                <AboutExperience />
                <Projects />
                <Activities />
                <Certificates />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="pb-8 pt-4">
                <div className="section-container">
                    <div className="footer-line mb-8" />
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-surface-400 dark:text-surface-500">
                        <p className="font-heading font-medium text-surface-900 dark:text-white">
                            © {new Date().getFullYear()} Nofi Ardiman Widjaya
                        </p>
                        <p className="text-surface-500 dark:text-surface-400">
                            Crafted with care & curiosity
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
