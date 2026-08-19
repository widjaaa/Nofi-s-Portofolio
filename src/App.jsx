import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout & Global Components
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
const CursorGlow = lazy(() => import('./components/CursorGlow'));

// Pages
import Home from './pages/Home';
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative noise-overlay overflow-x-hidden">
                {/* Global interactive effects */}
                <ScrollProgress />
                <Suspense fallback={null}>
                    <CursorGlow />
                </Suspense>
                <BackToTop />

                <Navbar />
                
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route 
                            path="/projects" 
                            element={
                                <Suspense fallback={<div className="min-h-screen" />}>
                                    <ProjectsPage />
                                </Suspense>
                            } 
                        />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="pb-8 pt-4">
                    <div className="section-container">
                        <div className="footer-line mb-8" />
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-surface-400 dark:text-surface-500">
                            <p className="font-heading font-medium text-surface-900 dark:text-white">
                                © {new Date().getFullYear()} Nofi Ardiman Widjaya
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
};

export default App;
