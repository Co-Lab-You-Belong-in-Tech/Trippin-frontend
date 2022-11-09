import React from 'react';
import { Carousel } from 'react-responsive-carousel';

// carosel images
import Caro1 from '../assets/caro1.png';
import Caro2 from '../assets/caro2.png'
import Caro3 from '../assets/caro3.png'
const caroselData = [
    {
        id: 1,
        img: Caro1,
        content: "Planning and mapping your travel itineraries can be overwhelming, but Trippin’ is here to help you with that"
    },
    {
        id: 2,
        img: Caro2,
        content: "Our integrated map visualization will save you that extra time figuring it out the best sequencing for your trip itinerary."
    },
    {
        id: 3,
        img: Caro3,
        content: "Make the most of your time wherever you go!"
    },
]

const CarouselComp = () => {
  return (
    <Carousel autoPlay={true} showThumbs={false} showStatus={false} showArrows={true} showIndicators={false} infiniteLoop={true} className=' w-full h-80 flex flex-col bg-[#CAD5F3]'>
        <div className=' flex flex-row items-center w-[1140px] h-64 mt-7 ml-auto mr-auto'>
                <img alt="carosel" src={Caro1} className=""/>
                <p className="text-lg font-bold font-['Montserrat']">Planning and mapping your travel itineraries can be overwhelming, but Trippin’ is here to help you with that.</p>
        </div>
        <div className=' flex flex-row items-center justify-between w-[1140px] h-64 mt-7 ml-auto mr-auto'>
                <div className='w-[250px]  object-contain'>
                    <img alt="carosel" src={Caro2}/>
                </div>
                <div className='w-[550px]'>
                    <p className="text-lg font-bold font-['Montserrat']">Our integrated map visualization will save you that extra time figuring it out the best sequencing for your trip itinerary..
                    </p>
                </div>
        </div>
        <div className=' flex flex-row items-center w-[1140px] h-64 mt-7 ml-auto mr-auto justify-between'>
            <div className='w-[400px]  object-contain'>
                        <img alt="carosel" src={Caro3}/>
            </div>
                <p className="text-lg font-bold font-['Montserrat']">Make the most of your time wherever you go!</p>
        </div>
    </Carousel>
  )
}

export default CarouselComp
