import React, { useState } from 'react'

const Product = ({product}) => {
    const { product_image, product_title, price} = product
  return (
    <div className=''>
        <div className='card border-2 p-6 shadow-lg m-8 bg-white'>            
            <img className='w-full h-[250px] object-cover rounded-lg' src={product_image} alt="" />
            <p className='text-xl font-semibold py-2'>{product_title}</p>
            <p className='text-lg text-gray-500 py-2'> Price: ${price}</p>
            <button className='btn border-[#9538E2] rounded-full text-xl font-bold text-[#9538E2]'> View Deails</button>
        </div>
    </div>
  )
}

export default Product