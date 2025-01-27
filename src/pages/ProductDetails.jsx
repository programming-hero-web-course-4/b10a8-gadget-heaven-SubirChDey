import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"

const ProductDetails = () => {
  
  const data = useLoaderData()
  const {product_title} = data
  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    
    const singleProduct = data.find(product => product.id == id)
    setProduct(singleProduct)
  }, [data, id])

  return (
    <div>
      
      <div>
        <p> {product.product_title}</p>
        products
      </div>



    </div>


  )
}

export default ProductDetails