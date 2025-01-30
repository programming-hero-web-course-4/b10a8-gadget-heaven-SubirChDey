import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import Product from "./Product"
import { useEffect, useState } from "react"


const Products = () => {
  const data = useLoaderData()
  const { category } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {

    if (category === "All Products") {
      setProducts(data);
    } else if (category) {
      const filteredByCategory = [...data].filter(product => product.category === category);
      setProducts(filteredByCategory);
    }
    else {
      setProducts(data);
    }

  }, [category, data])

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 bg-gray-100 rounded-2xl">
        {
          products.map(product => <Product key={product.id} product={product}></Product>)
        }
      </div>
      {/* <div className="flex justify-center border-2 border-red-500"></div> */}
        {products.length === 0 && <div><p className=" text-3xl flex flex-row justify-center text-center items-center">No products found</p></div>}
                
      
    </div>
  )
}

export default Products