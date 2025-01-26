import Banner from "../components/Banner"
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Products from "./Products";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData()
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
        <Products></Products>
      </div>


    </div>
  )
}

export default Home