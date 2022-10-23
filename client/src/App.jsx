import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProductList from './pages/ProductList'


function App() {
   const user = true
  return (
    <div>
      <Routes> 
      <Route path = '/' element = {<Home/>} />
         <Route path = "/Product/:id"  element = {<ProductPage/>}/>
         <Route path = "/Cart"  element = {<Cart/>}/>
         <Route path = "/Login"  element = {<Login/>}/>
         <Route path = "/Products/:category"  element = {<ProductList/>}/>
     </Routes>
    </div>
  )
}

export default App
