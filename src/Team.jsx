import React, { useState } from 'react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('mountain1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const historyBackgroundUrl = 'https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=612x612&w=0&k=20&c=5MWcvFfiJzmxMZ6olmyd14Q-OskUmbg33KS8LwFnb_0='; // Replace with your image URL

  return (
    <section id="team" className="pt-10 bg-gray-100 lg:h-[90vh] h-[100vh] flex flex-col justify-between">
      <div className="lg:w-full lg:ml-0 h-1/3 flex flex-col justify-between w-[80%] ml-[10%]">
        <div className='lg:w-[80%] w-full lg:ml-[10%] ml-0 lg:mb-6 mb-4 lg:flex lg:flex-end lg:flex-row flex flex-col h-full'>
        <div className="lg:text-8xl text-4xl font-bold p-5 flex flex-end text-[#1f3667]">
            02.
            <h2 className="lg:text-3xl text-lg font-bold text-gray-600 flex-end">Team</h2>
        </div>
      
      <div className="text-gray-600 flex flex-end h-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id justo non pharetra.</div>
      </div>
        <div className=" hidden lg:flex  bg-[#1f3667] w-full cursor-pointer">
            <div className='lg:w-[80%] lg:ml-[10%] w-full flex'>
          <div
            className={`mr-4 py-2 px-4  ${activeTab === 'mountain1' ? 'bg-gray-300 text-white' : 'bg-[#1f3667]'}`}
            onClick={() => handleTabClick('mountain1')}
          >
            Mountain 1
          </div>
          <div
            className={`py-2 px-4  ${activeTab === 'mountain2' ? 'bg-gray-300 text-white' : 'bg-[#1f3667]'}`}
            onClick={() => handleTabClick('mountain2')}
          >
            Mountain 2
          </div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:hidden bg-[#1f3667]  cursor-pointer">
            <div className='lg:w-[80%] lg:ml-[10%] w-full flex'>
          <div
            className={`mr-4 py-2 px-4  ${activeTab === 'mountain1' ? 'bg-gray-300 text-white' : 'bg-[#1f3667]'}`}
            onClick={() => handleTabClick('mountain1')}
          >
            Mountain 1
          </div>
          <div
            className={`py-2 px-4  ${activeTab === 'mountain2' ? 'bg-gray-300 text-white' : 'bg-[#1f3667]'}`}
            onClick={() => handleTabClick('mountain2')}
          >
            Mountain 2
          </div>
          </div>
        </div>
      <div className='h-2/3 relative flex justify-start' style={{ backgroundImage: `url(${historyBackgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
       <div className='lg:w-[80%] lg:ml-[10%] absolute'>
        {activeTab === 'mountain1' && (
          <div className="absolute inset-0 flex flex-col mt-10  justify-center items-center bg-white opacity-50 w-[40%] h-[250px]">
              <div>Mountain 1</div>
           <div className='w-[90%] flex justify-around font-bold'>
            <div>
              <ul>
                <li>
                 25 NOV 2016
                </li>
                <li>26 NOV 2016</li>
                <li>27 NOV 2016</li>
              </ul>
            </div>
            <div>
            <ul>
                <li>
                  India
                </li>
                <li>India</li>
                <li>India</li>
              </ul>
            </div>
            </div>
          </div>
        )}
         {activeTab === 'mountain2' && (
          <div className="absolute inset-0 flex flex-col mt-10 justify-center items-center bg-white opacity-50 w-[40%] h-[250px]">
            <div>Mountain 2</div>
             <div className='w-[90%] flex justify-around font-bold'>
              
            <div>
              <ul>
                <li>
                 25 NOV 2017
                </li>
                <li>26 NOV 2017</li>
                <li>27 NOV 2017</li>
              </ul>
            </div>
            <div>
            <ul>
                <li>
                  Zurich
                </li>
                <li>DSVKJBVKJDBF</li>
                <li>ZURICHSDHJBVJSH</li>
              </ul>
            </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Team;
