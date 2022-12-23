import React from 'react'
import { useSelector } from "react-redux";
import { Icon } from '@iconify/react';
import NavBar from '../components/NavBar'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import offwhiteshoes from '../assets/offwhiteshoes.jpeg'
import nikeshoe from '../assets/nikeshoe.jpeg'
import nikezoomx from '../assets/nikezoomx.jpeg'
import { useState } from 'react'

const Cart = () => {

    const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const ProductDivStyle = "flex w-[100%] h-auto items-center flex-col";
  
  const cart = useSelector((state) => state.cart);

      const [quantity, setQuantity] = useState(1);

     const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < 13 && setQuantity(quantity + 1);
    }
  };

  return (
   
    <>
    <div>
        <NavBar />
        <div className="">
        <div className="flex justify-center text-4xl pt-20">CART</div>

        {/* upper buttons div */}
        

        {/* vertically center parent div */}
        <div className="flex  mt-7 flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            <hr className="mb-5 mt-0" />
            <div className = "flex justify-end mr-2 text-2xl"><Icon icon="bi:x-lg" /></div>

            <div className={ProductDivStyle}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="h-[6rem] w-[5rem]"
                  src={offwhiteshoes}
                  alt="product_img"
                />
                  
                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing Sky Shirt
                  </p>
                  
                  <p>
                    <b className="mr-2">Size:</b>M
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}            
            </div>
            <div className='ml-5 mt-3'> 

            <Counter quantity = {quantity} handleQuantity = {handleQuantity} />
            
                <p className='mt-5 mb-2 text-lg'> Price : 70$</p>
            </div>

            <hr className="mb-7 mt-5" />
            

           </div>

         {/* summary */}

          <div className="Summary flex-[0.4] mx-3 flex flex-col items-center w-auto h-[40vh] border-2 border-gray-300 rounded-md shadow-lg p-5 text-lg mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>$140</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>$10</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Discount:</p>
              <p>-$10</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>$140</p>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default Cart