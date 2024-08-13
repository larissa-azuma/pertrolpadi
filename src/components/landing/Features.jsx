import React from 'react'
import Content from '../../assests/image/Content.png'
function Features() {
  return (
    <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
        <h1 className='text-center text-4xl font-bold sm:max-w-sm mx-auto'>Why Choose Us?</h1>
        <p className='text-center'>We have so much to offer you something something something</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div className=' flex flex-col justify-center gap-8 sm:pt-0'>
            <h1 className='text-2xl font-bold text-black'>Latest News</h1>
            <p className='text-sm'>Stay updated with the latest news and trends in the fuel market</p>

            <div className='text-center '>
                <h1 className='text-lg font-medium text-black text-center '>Latest Development in the Fuel Industry</h1>
                <p className='text-sm'>Stay informed with the most blah Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit and sapiente ipsam perspiciatis voluptatem dolores rerum quisquam ad, placeat repudiandae quo numquam libero animi illo laudantium consequuntur molestias itaque tempora in!</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <img src={Content} alt='' className='max-w-[420px] w-full mx-auto'/>
        </div>
        </div>
        </div>

        
    </div>
  )
}

export default Features