import { useLoaderData, useParams } from "react-router-dom"
import Product from "./Product"

const Products = () => {
  const data = useLoaderData()
  const { category } = useParams()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 gap-4 bg-white rounded-2xl">
        {
          data.map(product => <Product key={product.id} product={product}></Product>)
        }
      </div>
    </div>
  )
}

export default Products