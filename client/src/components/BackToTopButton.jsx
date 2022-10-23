import React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

const BackToTopButton = () => {
 const [backToTopButton, setBackToTopButton] = useState(false);

 useEffect(() => {
     window.addEventListener('scroll', () => {
         window.scrollY > 1500 ? setBackToTopButton(true) : setBackToTopButton(false)
     })
 }, [])

 const scrollUp = () => {
     window.scrollTo({ 
         top: 0,
         behavior: 'smooth'
     })
 }

  return (
      <div> 
    {backToTopButton && (<button className='fixed bottom-[20px] right-[20px]'  onClick={scrollUp}><Icon className='w-10 h-10 ' icon="bi:arrow-up-square-fill" /></button>)}
    </div>
  )
}

export default BackToTopButton;