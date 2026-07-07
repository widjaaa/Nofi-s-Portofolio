import React, { Suspense, lazy } from 'react';
import './App.css';

// Above-the-fold — loaded immediately
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';

// Below-the-fold — lazy loaded for performance
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Activities = lazy(() => import('./components/Activities'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));

// Interactive Enhancements
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
const CursorGlow = lazy(() => import('./components/CursorGlow'));

const App = () => {
    return (
        <div className="relative noise-overlay overflow-x-hidden">
            {/* Global interactive effects */}
            <ScrollProgress />
            <Suspense fallback={null}>
                <CursorGlow />
            </Suspense>
            <BackToTop />

            <Navbar />
            <main>
                <Hero />
                <Stats />
                <About />
                <Suspense fallback={<div className="min-h-screen" />}>
                    <Experience />
                    <Projects />
                    <Activities />
                    <Certificates />
                    <Contact />
                </Suspense>
            </main>

            {/* Footer */}
            <footer className="pb-8 pt-4">
                <div className="section-container">
                    <div className="footer-line mb-8" />
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-surface-400 dark:text-surface-500">
                        <p className="font-heading font-medium text-surface-900 dark:text-white">
                            © {new Date().getFullYear()} Nofi Ardiman Widjaya
                        </p>
                        {/* <p className="text-surface-500 dark:text-surface-400">
                            Crafted with care & curiosity
                        </p> */}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
