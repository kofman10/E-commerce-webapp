import React from 'react'
import { Icon } from '@iconify/react';
import BackToTopButton from './BackToTopButton';

const Footer = () => {
  return (
      <>
      <div className='bg-black text-white '>
         <p className='pt-6 text-center'>Join our community</p>
         <p className='pt-2 text-center mx-7' >Get 10% off your first order and be the first to get the latest updates on our promotion, campaign, products and services.</p>
         <div className='flex justify-center items-center flex-row space-x-6 mt-10 pb-10'> 
         <div className="relative">
    <input  type="email" id="username" className="border-b rounded-none bg-black py-1 focus:outline-none focus:border-white focus:border-b-2 transition-colors peer" />
    <label  className="absolute left-0 top-1 text-white cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-white transition-all">Email</label> 
  </div>
  <a href="/">Join</a>
  </div>
      </div>
      <footer className='mx-3 pt-5'>
        <p className='mb-5 font-semibold uppercase'>Explore</p>
        <ul>
          <li>About us </li>
          <li>Contact</li>
          <li>My account</li>
        </ul>

        <hr className="border-1 border-black w-full pb-12 mt-10"/>

        <div className='flex space-x-6 pb-3'> 
        <Icon className='h-5 w-5' icon="fa:snapchat" />
        <Icon className='h-5 w-5' icon="akar-icons:instagram-fill" />
        <Icon className='h-5 w-5' icon="akar-icons:twitter-fill" />
        </div>
        <span>© 2022 KOFMAN</span>
        <BackToTopButton />
      </footer>
      
      </>
  )
}

export default Footer