import React from 'react'
import CarouselComp from '../component/Carousel';
import EditHeader from '../component/EditHeader';
import Features from '../component/Features';
import Footer from '../component/Footer';
import LoginFormComp from '../component/LoginForm';


const Home = () => {
  return (
    <div className='flex flex-col'>
      <EditHeader />
      <CarouselComp />
      <LoginFormComp />
      <Features />
      <Footer />
    </div>
  )
}

export default Home
