import React from 'react'

const Product = ({item}) => {
  return (
  <>
   <a href = {`/Product/${item._id}`}>
    <div className = 'h-66 w-36'> 

    <div className='w-36 h-60'> 

    <img className='w-full h-full object-cover object-top' src={item.img} alt="" />
      
    </div>
     <div className='mx-2'> 
<p className='text-center'>{item.title}</p> 
 <p className='text-center'>${item.price}</p> 
 <button></button>
 </div>
 </div>
  </a>
  </>
  )
}

export default Product