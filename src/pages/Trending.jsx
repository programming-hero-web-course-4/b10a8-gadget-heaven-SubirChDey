import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from './Product'
import { useEffect } from "react";

const Trending = () => {
    useEffect(() => {
        document.title = "Trending Products | Gadget Heaven";
    }, []);
    const data = useLoaderData([])
    return (
        <div>
            <div className="bg-[#9538E2] w-11/12 mx-auto text-center">
                <h2 className="text-3xl text-white font-bold p-4"> Trending Products </h2>
                <p className="text-white pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className='flex justify-center mt-10'>
                <h2 className="text-3xl font-bold"> Most sold products </h2>
            </div>
            <div className='flex justify-around w-11/12 mx-auto'>
                <h3>There are</h3>
                <button>Most sold</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-100 rounded-2xl w-11/12 mx-auto">
                {
                    data.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    )
}

export default Trending