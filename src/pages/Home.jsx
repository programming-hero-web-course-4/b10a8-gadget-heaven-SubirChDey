import Banner from "../components/Banner"
import { Link, NavLink, Outlet } from 'react-router-dom';
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className=" flex w-11/12 mx-auto mt-12]">
        <div className=" flex flex-col justify-start items-start gap-5">
          <NavLink className="tab tab-active">All Products</NavLink>          
          <NavLink className="tab">Laptops</NavLink>
          <NavLink className="tab">Phones</NavLink>
          <NavLink className="tab">Accessories</NavLink>
          <NavLink className="tab">Smart Watches</NavLink>
          <NavLink className="tab">MacBook</NavLink>
          <NavLink className="tab">iPhone</NavLink>
        </div>
        <Products></Products>
      </div>


    </div>
  )
}

export default Home