import React from 'react';
import Carousel from './components/Carousel';
 // Import Link from react-router-dom

const History = () => {
  const historyBackgroundUrl = 'https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=612x612&w=0&k=20&c=5MWcvFfiJzmxMZ6olmyd14Q-OskUmbg33KS8LwFnb_0='; // Replace with your image URL

  return (
    <section id="history" className="relative pt-10 h-[90vh] flex flex-col justify-between">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${historyBackgroundUrl})`, zIndex: -1 }}></div>

    <div className="container mx-auto relative z-10 h-2/3 lg:w-full w-[80%]">
        <h1 className='text-6xl font-bold text-[#1f3667]'>01.</h1>
      <h2 className="lg:text-3xl text-lg font-bold mb-8 text-[#1f3667]">History Section</h2>
      <p className="text-[#1f3667] text-lg mb-8 lg:ml-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id justo non pharetra.</p>
      
    </div>
    <div className="px-20 bg-[#1f3667] bg-opacity-70 relative z-20 flex items-center flex-end h-1/3">
      <Carousel />
    </div>
  </section>
  );
};

export default History;
