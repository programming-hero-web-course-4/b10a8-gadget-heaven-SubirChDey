import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Product = ({ product }) => {
  const { product_image, product_title, price, } = product || {}
  return (
    
    <div>
      <div className='card border-2 p-6 shadow-lg m-4 bg-white'>
        <img className='w-full h-[250px] object-cover rounded-lg' src={product_image} alt="" />
        <p className='text-xl font-semibold py-2'>{product_title}</p>
        <p className='text-lg text-gray-500 py-2'> Price: ${price}</p>
        <NavLink to={`/product/${product.product_id}`}><button className='btn border-[#9538E2] rounded-full text-xl font-bold text-[#9538E2]'> View Deails</button></NavLink>
      </div>
    </div>

  )
}

export default Product