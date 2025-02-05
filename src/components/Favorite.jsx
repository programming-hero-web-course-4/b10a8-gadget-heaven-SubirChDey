import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";


const Favorite = ({ product, handleFavRemove }) => {
    const { product_image, product_title, price, description } = product || {}


    return (
        <div className='p-8'>
            <div className='flex justify-start gap-4 my-4 px-2 p-4 bg-white rounded-3xl'>

                <div className='w-52 rounded-2xl'>
                    <img className='w-full p-2 rounded-2xl' src={product_image} alt="" />
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-2xl font-bold my-2'>{product_title}</h3>
                        <p className='my-2'><span className='font-bold'>Description: </span> {description} </p>
                        <p className='my-2'> <span className='font-bold'>Price $</span>{price} </p>
                        <button className='bg-[#9538E2] py-2 px-4 rounded-full text-white'>Add to Card</button>
                    </div>
                    <button onClick={() => handleFavRemove(product.product_id)} className='absolute right-44 text-red-600 hover:bg-[#9538E2] rounded-full'>
                        <IoIosCloseCircleOutline className='w-12 h-12'></IoIosCloseCircleOutline>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Favorite