import React from 'react'
import CarouselComp from '../component/commonComponents/Carousel';
import EditHeader from '../component/interenaryComponents/EditHeader';
import Features from '../component/featuresComponents/Features';
import Footer from '../component/commonComponents/Footer';
import LoginFormComp from '../component/authComponents/LoginForm';


const Home = () => {
  const show = false;
  return (
    <div className='flex flex-col'>
      <EditHeader show={show}/>
      <CarouselComp />
      <LoginFormComp />
      <Features />
      <Footer />
    </div>
  )
}

export default Home
