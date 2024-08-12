import React from 'react'
import home2 from '../../assests/image/home2.jpg'


function Hero() {
  return (
    <div className='h-dvh flex justify-center' style={{ backgroundImage: `url(${home2})` }}>
      <div> 
        <h2 className='text-center text-white px-4'>
        Welcome to Petrol Padi
        </h2>
         </div> 
         
    </div>
  )
}

export default Hero