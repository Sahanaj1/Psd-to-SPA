import React from 'react';

const Hero = () => {
  const heroBackgroundUrl = 'https://images.unsplash.com/photo-1560710990-9f5d4197b5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzbm93fGVufDB8fDB8fHww'; // Replace with your image URL

  return (
    <div className=" py-32 text-center lg:h-[100vh] h-auto" style={{ backgroundImage: `url(${heroBackgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="lg:text-8xl text-3xl font-bold text-white">LOS ANGELES</h1>
    </div>
  );
};

export default Hero;
