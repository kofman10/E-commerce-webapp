import React from 'react'
import NavBar from '../components/NavBar'
import Swiperr from '../components/Swiperr'
import Categories from '../components/Categories'
import Products from '../components/Product/Products'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div> 
      <NavBar /> 
      <Swiperr />
      <Categories />
      <Products />    
      <Footer />
    </div>
  )
}

export default Home