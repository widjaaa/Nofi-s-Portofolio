import React from 'react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutExperience from './components/AboutExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutExperience />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
