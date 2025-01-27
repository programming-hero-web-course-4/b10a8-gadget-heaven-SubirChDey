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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-100 rounded-2xl w-11/12 mx-auto">
            {
                data.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    )
}

export default Trending