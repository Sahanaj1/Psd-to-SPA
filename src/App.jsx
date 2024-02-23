import React from 'react';
import Navbar from './components/Navbar';
import History from './History';
import Team from './Team';
import Hero from './Hero';
import Footer from './Footer';

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Hero/>
      <History />
      <Team />
      <Footer/>
    </div>
  );
};

export default App;
