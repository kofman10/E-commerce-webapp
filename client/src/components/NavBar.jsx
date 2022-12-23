import React from 'react'
import { ShoppingCartOutlined } from '@mui/icons-material';
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './Sidebar/Sidebar'
import { useSelector } from "react-redux";

const NavBar = () => {

  const [isOpen, setOpen] = useState(false);
 isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  const showNav = () => {
    setOpen(true)
      
  }
  const quantity = useSelector(state=>state.cart.quantity)
 
  return (
    <>
    <div className='z-10 fixed bg-white w-full'> 
     <div className='flex flex-1 flex-row justify-between items-center mr-2'>
            
            <div> 
         <Hamburger size={25} onToggle={toggled => { if(toggled) {
           showNav();
         }  
         else {  setOpen(false)  }}}/> 
       </div>
          
 
<div> <a href = '/' className = 'text-4xl'> KOFMAN </a> </div>

 <div> 
 <a href = '/Cart'>
 <ShoppingCartOutlined  sx={{
    fontSize: 25 ,
  }} /> {quantity} 
  </a >
  </div>
     </div>

{ isOpen && (<div> <motion.div initial = {{x: '-100%'}} animate = {isOpen ? {x: '0%'} : {x: '100%'} } className="z-10 absolute bg-white left-0 p-2 w-[70vw] h-screen shadow-2xl  blue-glassmorphism text-black "> 
          < Sidebar />
   </motion.div> </div>)}
   </div>
    </>
  )
}

export default NavBar