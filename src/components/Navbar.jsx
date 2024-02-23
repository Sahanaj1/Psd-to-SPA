import React, { useState, useEffect } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center w-[80%] lg:w-full">
          <div className="flex-shrink-0 flex items-center">
            <img src="https://images.unsplash.com/photo-1560710990-9f5d4197b5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzbm93fGVufDB8fDB8fHww" className="h-8 w-8 rounded-full" alt="Logo" />
            <div className={`${scrolled ? 'visible' : 'invisible'} ml-2`}>
              LOS ANGELES
              <div>MOUNTAINS</div>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <button className={`hover:text-black ${scrolled ? 'underline' : ''}`} onClick={() => scrollToSection('history')}>01. History</button>
            <button className={`hover:text-black ${scrolled ? 'underline' : ''}`} onClick={() => scrollToSection('team')}>02. Team</button>
          </div>
          <div className="sm:hidden">
            <button className={`hover:text-black ${scrolled ? 'underline' : ''}`} onClick={() => scrollToSection('history')}>History</button>
            <button className={`hover:text-black ${scrolled ? 'underline' : ''}`} onClick={() => scrollToSection('team')}>Team</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
