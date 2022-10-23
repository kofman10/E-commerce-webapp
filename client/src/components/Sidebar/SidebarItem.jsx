import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react'
import { motion } from 'framer-motion'


const SidebarItem = ({item}) => {
  const [open ,setOpen] = useState(false)

  const flip = () => { 
      setOpen(!open)
  }

  return <div>{item.childrens ? (
      <div> 
    <div className='flex justify-between items-center'>  
        <p className='pt-2'>{item.title}</p>
        <Icon onClick = {flip} className = {open ? 'h-6 w-6 transition-transform duration-75 rotate-180' : 'h-6 w-6 transition-transform duration-75 rotate-0'} icon="akar-icons:chevron-down" />
    </div>
     <motion.div initial = {{y: '0%'}} animate = {open ? {y: '10%'} : {y: '0%'}} className = {open ? 'h-auto ml-2 pb-3' : 'overflow-hidden pt-2 h-0'}>
    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
    </motion.div> 
    </div>
  ) : (  <div> 
    <div className='flex justify-between pt-1'>  
        <span>{item.title}</span>
    </div>
    </div>)}
 </div> }

export default SidebarItem
