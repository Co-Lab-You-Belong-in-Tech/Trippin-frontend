import React from 'react';

import weTripping from '../assets/we-trippin.png'
import optimize from '../assets/optimize.png';
import colabo from '../assets/colabo.png';
import access from '../assets/access.png';

const Features = () => {
  return (
    <div className='flex flex-col items-center justify-between mt-2 mb-2 '>
      <div className='flex w-full mt-2 mb-2 ml-auto mr-auto'>
      <div className='w-[50%] h-[45vh] rounded-r-md bg-[#EF4910]'>
        <div className='flex flex-col items-center w-[80%] ml-auto mr-auto mt-20 mb-20'>
                <h3 className='text-[#fff] text-[40px] text-[Montserrat] font-bold leading-[49px] mb-6'>You plan. I help. We trippin’.</h3>
                  <h4 className='text-[#fff] text-[24px] text-[Montserrat] leading-[30px] mb-2'>Your itinerary and mapping</h4>
                        <h4 className='text-[#fff] text-[24px] text-[Montserrat] leading-[30px]'>all in one place!</h4> 
        </div>
      </div>
      <div className='w-[50%] flex items-center justify-center h-[45vh]'>
        <div className=''>
            <img alt="we trippin" src={weTripping}/>
        </div>
      </div>
      </div>
      <div className='w-full p-2 mt-10 mb-6'>
            <div className='mt-1 mb-1 ml-auto mr-auto'>
                <h3 className='text-center text-[40px] text-[Montserrat] text-[#141820] leading-10 font-bold'>First release features</h3>
            </div>
            <div className='flex flex-col lg:flex-row flex-wrap items-center justify-between mt-10 mb-4 ml-auto mr-auto w-[70%]'>
                <div className='flex flex-col gap-3 items-center justify-center text-center w-[260px] '>
                    <div><img src={optimize} alt="optimize" /></div>
                    <div>
                        <h4 className='text-[24px] text-[#141820] leading-[29px] font-bold mt-2 mb-2'>Optimize your time and routes.</h4>
                        <p className='text-[17px] text-[#141820] leading-[30px] font-[400] mt-2 mb-2'>And make the most of your time wherever you go!</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center text-center w-[260px] '>
                    <div><img src={colabo} alt="colabo" /></div>
                    <div>
                        <h4 className='text-[24px] text-[#141820] leading-[29px] font-bold mt-2 mb-2'>Colaborate with your travel buddies!</h4>
                        <p className='text-[17px] text-[#141820] leading-[30px] font-[400] mt-2 mb-2'>And make sure everyone participates on your trip planning!</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center text-center w-[260px] '>
                    <div><img src={access} alt="access" /></div>
                    <div>
                        <h4 className='text-[24px] text-[#141820] leading-[29px] font-bold mt-2 mb-2'>Access itinerary on your phone.</h4>
                        <p className='text-[17px] text-[#141820] leading-[30px] font-[400] mt-2 mb-2'>Check your itinerary offline when you are on your trip.</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Features
