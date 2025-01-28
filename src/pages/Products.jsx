import { useLoaderData, useParams } from "react-router-dom"
import Product from "./Product"
import { useEffect, useState } from "react"


const Products = () => {
  const data = useLoaderData()
  const { category } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(product => product.category === category)
      setProducts(filteredByCategory)
    } else {
      setProducts(data.slice(0, 10))
    }

  }, [category, data])

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 bg-gray-100 rounded-2xl">
        {
          products.map(product => <Product key={product.id} product={product}></Product>)
        }
      </div>
      

    </div>
  )
}

export default Products