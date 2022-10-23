import React from 'react'
import { framerImage } from '../Data/data'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'


const Categories = () => {
 const [width, setWidth] = useState()
 const carousel = useRef(0)

 useEffect(() => {
   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
 }, [])
        
  return (
    <div className = 'mx-3 mt-10'>
          
          <motion.div ref = {carousel} className='cursor-grab overflow-hidden'> 
            <motion.div drag = 'x' dragConstraints = {{right : 0, left: -width}} className=' flex space-x-3'>
           {framerImage.map((item) =>
            ( 
               <motion.div  key = {item.id} className=''> 
         <div className='h-[50vh] w-[15rem] relative '> 
         <div className = ' w-full mt-52  items flex justify-center absolute'> <a href = {`/products/${item.cat}`}> <button className = 'bg-black  uppercase text-white  p-3' type = 'button'> shop now 
         </button> </a>
         </div> 
         <img className='h-full w-full  object-cover' src={item.img} alt="" /> 
         </div>  
               </motion.div>
           ))}
          </motion.div>
          </motion.div>
           <h1 className = 'font-serif font-semibold text-lg text-center mx-3 mt-10'>FeaturedProducts</h1 >    
    </div>
  
  )
}

export default Categories;