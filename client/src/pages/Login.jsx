import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { useState } from "react";

const Login = () => {
const [showModal, setShowModal] = useState(false)

const modalHandler = () => {
  setShowModal(true)
}

const onCloseHandler = () => {
  setShowModal(false)
}

  return (
    <>  
        <NavBar /> 
        <h1 className='pt-20 text-center text-3xl'>LOGIN</h1>  
  <div className=" sm:mx-auto sm:w-full sm:max-w-md z-0">
    <div className="pt-20 px-6 sm:px-10">
      <form className="mb-0 space-y-6" action="#" method="POST">
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
          <button type="submit" className="w-full flex justify-center p-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black focus:outline-none ">Sign In</button>
        </div>
      </form>
      <p className = 'mt-4 text-center'>or</p>
      <div>
          <button onClick = {modalHandler} className="w-full mt-4 mb-6 flex justify-center p-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gray-200 focus:outline-none ">Create Account</button>
        </div>
    </div>
  </div>
      <Footer />
      < Modal onClose = {onCloseHandler} visible = {showModal} />
    </>
  )
}

export default Login