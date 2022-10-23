import NavBar from '../components/NavBar'
import Products from '../components/Product/Products'
import Footer from '../components/Footer'
import { useLocation } from "react-router";
import { useState } from 'react'



const ProductList = () => {

  const location = useLocation()

  const cat = location.pathname.split('/')[2]

  const [sort, setSort] = useState('latest');

  const handleSort = (e) => {
     setSort(e.target.value)
  }
  return (
    <>
    
    <NavBar />
    <h1 className = 'pt-16 text-3xl uppercase text-center'>{cat}</h1>
    <select onChange={handleSort} name = 'Filter' className="border-[2px] border-black focus:outline-none border-silver p-1 rounded-md ml-5 mt-5 mb-4">
                <option disabled>Filter</option>
                <option value = 'latest'>Sort by latest</option>
                <option value = 'asc'>Sort by Price: low to high</option>
                <option value = 'desc'>Sort by Price: high to low</option>
              </select>
    <Products cat = {cat} sort = {sort}/>
    <Footer />
    </>
  )
}

export default ProductList