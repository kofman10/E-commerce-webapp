import React from 'react'
import SidebarItem from './SidebarItem'
import items from '../../Data/sideBar.json'
import { Icon } from '@iconify/react';

const Sidebar = () => {
  return (
         <div>
         { items.map((item, index) => <SidebarItem key = {index} item = {item} /> )} 
         <div className=''> 
         <a href = '/Login' className='flex gap-1 items-center pt-4'> <Icon icon="bx:user" /> Log in/Create Account</a>
           <input type="text" placeholder='SEARCH' className= "placeholder-black border-b pt-5 rounded-none bg-white py-1 focus:outline-none border-black  transition-colors peer" />
         </div>
         </div>
  )
}

export default Sidebar