import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"

const ProductDetails = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const singleProduct = data.find(product => product.id == id)
    setProduct(singleProduct)
  }, [data, id])

  return (
    <div>
      {/* <p>Coffee Details: {product.product_title}</p>
      <img src={product.product_image} alt="" /> */}



    </div>


  )
}

export default ProductDetails