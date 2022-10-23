import React from 'react'
import {useState, useEffect} from 'react'
//import { popularProducts } from '../../Data/data'
import Product from './Product'
import axios from "axios";

const Products = ({ cat, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
         const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`  : "http://localhost:5000/api/products")
         setProducts(res.data)
         setFilteredProducts(res.data)
      } 
      
      catch (err) {

      }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <> 
    <div className='grid grid-cols-2 place-items-center'>   
           {cat ? filteredProducts.map((item) => ( <Product item = {item} key={item._id}/> )) : products.slice(0,8).map((item) => <Product item={item} key={item._id} />)}
    </div>
    </>
  )
}

export default Products