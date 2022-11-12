import React from 'react'

// icons
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {GrPinterest} from 'react-icons/gr';

import Logo from '../../assets/final.png'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row xl:flex-row justify-between items-center mt-2 pt-2 pb-2 pl-10 pr-10 bg-[#CAD5F3] h-[200px]'>
      <div>
        <img src={Logo} alt="trippin logo" />
      </div>
      <div>
        <ul className='flex flex-col items-center justify-center gap-4 text-[#141820] text-[16px] font-[600]'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='flex gap-3 items-center justify-center'>
        <FaFacebook size={30} color="#fff"/>
        <AiFillTwitterCircle size={30} color="#fff"/>
        <AiFillInstagram size={30} color="#fff"/>
        <GrPinterest size={30} color="#fff"/>
      </div>
    </div>
  )
}

export default Footer
