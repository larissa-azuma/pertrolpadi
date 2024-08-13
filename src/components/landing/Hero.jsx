import React from 'react';
import home2 from '../../assests/image/home2.jpg';
import applefill from '../../assests/image/applefill.png'

function Hero() {
  return (
    <div className='relative w-screen h-full'>
      <img className='w-screen h-full object-cover' src={home2} alt="Hero" />
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <h2 className='text-lg text-white text-center mb-4'>
          Welcome to PetrolPadi
        </h2>

        <h1 className='text-4xl sm:text-3xl lg:text-4xl text-center text-white leading-relaxed mb-6'>
          Your Ultimate Fuel Companion 
          <br /> 
          <span>Across Nigeria</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <button className="bg-white text-black px-4 py-2 rounded">
            <a href="/Download">Download on GooglePlay</a>
          </button>
          <button className="bg-white text-black px-4 py-2 rounded">
          <img src={applefill} />
            <a href="/Download">Download now on App Store</a>
          </button>
        </div>
      </div>
    </div>

    
  );
}

export default Hero;
