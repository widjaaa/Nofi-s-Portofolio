 import React, { Suspense, lazy } from 'react';

import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';

const Experience = lazy(() => import('../components/Experience'));
const Projects = lazy(() => import('../components/Projects'));
const Activities = lazy(() => import('../components/Activities'));
const Certificates = lazy(() => import('../components/Certificates'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;
