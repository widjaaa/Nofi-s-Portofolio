import React from 'react';

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
    <>
      <Navbar />
      <Hero />
      <AboutExperience />
      <Projects />
      <Activities />
      <Certificates />
      <Contact />
    </>
  );
};

export default App;
