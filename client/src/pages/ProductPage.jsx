import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useLocation } from "react-router";
import { publicRequest } from "../requestMethod";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Counter from '../components/Counter'


const ProductPage = () => {

  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({});
  const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1);

     const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < 13 && setQuantity(quantity + 1);
    }
  };
   

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        console.log(res.data)
      } catch {}
    };
    getProduct();
  }, [id]);

   const handleClick = () => {
    dispatch(
      addProduct( {...product, quantity} )
    )
   }


  return (
      <> 
    
        <NavBar />
        
         <div className='w-5/6 h-3/4 mx-auto flex justify-center pt-16'>
           <img className='w-full h-full object-cover rounded-md shadow-lg ' src= {product.img} alt="" />
         </div>

        <div className=" flex flex-col mx-4 justify-center mt-10 mb-10">
          <h1 className="text-center text-[30px]">
            {product.title}
          </h1>
          <p className=" text-justify mt-4 ">
            {product.desc}
          </p>
          <div className="flex flex-col ">
            <p className="mt-7 text-lg">
             Price : ${product.price}
            </p>

            
            <div className="mt-7 text-lg">
              Size
              <select className="border-[2px] border-black focus:outline-none border-silver p-1 rounded-md ml-5">
                <option disabled>Select</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>

            <div className="mt-7">
              <Counter quantity = {quantity} handleQuantity = {handleQuantity} />
            </div>

          </div>

          <button onClick={handleClick} className="text-black bg-gray-200 rounded-md shadow-md mt-[30px] p-3">
            Add to Cart
          </button>

          <button className="text-white bg-black rounded-md shadow-md mt-[30px] p-3">
            Buy Now
          </button>
        </div>
             
            

         <Footer />
    </>
  )
}

export default ProductPage


//In react-redux the useDispatch hook gives us access to our store's dispatch method. Dispatch is used to send actions into our redux store and is the only way we can affect the store from within a component.