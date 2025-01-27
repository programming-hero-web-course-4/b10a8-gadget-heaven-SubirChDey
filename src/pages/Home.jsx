import Banner from "../components/Banner"
import { Link, NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
// import Products from "./Products";
import Categories from "../components/Categories";
import { useEffect } from "react";


const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = "Gadget Heaven";
  }, []);

  const categories = useLoaderData()
  console.log(categories);

  return (
    <div>
      <Banner></Banner>
      <div className="text-center py-4 mt-12">
        <h2 className="text-4xl font-bold">Explore Cutting-Edge Gadgets</h2>
      </div>

      <div className=" lg:flex w-11/12 mx-auto mt-12]">
        <div>
          <Categories categories={categories}></Categories>
        </div>
        {/* <div className=" flex flex-col justify-start items-start gap-5 w-60 mt-20">
          <NavLink className="tab tab-active">All Products</NavLink>          
          <NavLink className="tab">Laptops</NavLink>
          <NavLink className="tab">Phones</NavLink>
          <NavLink className="tab">Smart Watches</NavLink>
          <NavLink className="tab">MacBook</NavLink>
          <NavLink className="tab">iPhone</NavLink>
        </div> */}
        <Outlet></Outlet>
        {/* <Products></Products> */}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn text-[#9538E2] border-2 border-[#9538E2] rounded-full font-bold hover:bg-blue-500 hover:text-white" onClick={() => navigate('/trending')}> Trending Products </button>
      </div>


    </div>
  )
}

export default Home