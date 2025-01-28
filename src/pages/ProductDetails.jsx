import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineStarHalf } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const ProductDetails = () => {
  const products = useLoaderData()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  console.log("Data from Loader:", products);
  console.log("ID from Params:", id);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  useEffect(() => {    
    const singleProduct = products.find(product => product.product_id === parseInt(id))
    console.log(singleProduct);

    setProduct(singleProduct)
  }, [products, id])

  document.title = `${product.product_title} Gadget Heaven`;

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="bg-[#9538E2] w-11/12 h-96 mx-auto text-center">
        <h2 className="text-3xl text-white font-bold p-4"> Product Details </h2>
        <p className="text-white pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <div className="flex justify-center gap-6 pb-6">
        </div>
      </div>
      <div className="lg:flex justify-center h-[500px] max-w-4xl mx-auto bg-[#fbfafa] relative -top-52 p-4 rounded-3xl">
        <div className="p-4">
          <img className="w-full h-full" src={product.product_image} alt="" />
        </div>
        <div className="p-4">
          <h3 className="text-3xl text-[#09080F] font-semibold my-2">{product.product_title}</h3>
          <p className="text-xl text-gray-700 font-semibold my-2">Price: ${product.price}</p>
          <p className="flex justify-center text-green-700 border border-green-700 rounded-full py-1 max-w-32 items-center my-2">{product.availability ? 'In Stock' : 'Out of Stock'}</p>
          <p className="text-gray-600 my-2"> {product.description} </p>

          <div className="my-4">
            <h3 className="font-semibold my-2">Specification</h3>
            <ol className="list-decimal list-inside mt-2 text-gray-600">
              {/* {product.Specification.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))} */}
              {product.Specification?.map((spec, i) => (
                <li key={i}>{spec}</li>
              )) || <li>No specifications available</li>
              }
            </ol>

          </div>
          <div className="flex items-center gap-1">
            <h3 className="font-bold">Rating </h3> <MdOutlineStarHalf className="text-yellow-300 w-5 h-5" />
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-1">{renderStars(product.rating)}</div> <div>{product.rating}</div>
          </div>
          <div className="flex justify-start gap-8 my-3">
            <div className="flex items-center gap-1 bg-[#9538E2] py-2 px-4 rounded-full text-white"><button> Add To Card </button> <IoCartOutline className=" w-5 h-5" /></div>
            <button className="border-2 border-gray-200 rounded-full p-2"> <MdFavoriteBorder className=" w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProductDetails