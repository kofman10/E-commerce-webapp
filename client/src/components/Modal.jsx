import React from "react";
import { Icon } from '@iconify/react';


 const Modal = ({visible, onClose}) => {
  
  const onCloseHandler = (e) => {
      if(e.target.id === 'container') {
        onClose()
      }
  }


  return (<> { visible &&
    <div id="container" onClick={onCloseHandler} className="fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 pb-6 w-full">
      <div onClick={onClose} className = "flex justify-end mr-2 pb-6 text-2xl"><Icon icon="bi:x-lg" /></div>
      <form className="mb-0 space-y-6 mx-4" action="#" method="POST">
      <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Firstname</label>
          <div className="mt-1">
            <input id="firstname" name="firstname" type="text"  required className="placeholder-black bg-inherit border focus:border-2 w-full border-black focus:outline-none p-2" />
          </div>
        </div>
      <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Lastname</label>
          <div className="mt-1">
            <input id="lastname" name="lastname" type="text"  required className="placeholder-black bg-inherit border focus:border-2 w-full border-black focus:outline-none p-2" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <div className="mt-1">
            <input id="email" name="email" type="email"  required className="placeholder-black bg-inherit border focus:border-2 w-full border-black focus:outline-none p-2" />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1">
            <input id="password" name="password" type="password"  required className="placeholder-black bg-inherit border focus:border-2 border-black focus:outline-none p-2 w-full" />
          </div>
        </div>

        <div>
          <button type="submit" className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black focus:outline-none ">Sign Up</button>
        </div>
      </form>
      </div>
    </div>}
    </>
  );
}
export default Modal