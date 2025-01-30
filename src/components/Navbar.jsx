import { Link, NavLink, useLocation } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    const {pathname} = useLocation()
    return (        
        <div className={`navbar  w-11/12 mx-auto rounded-t-2xl lg:px-10 lg:pt-8 z-50 sticky top-0 ${
            pathname === "/" ? "bg-[#9538E2] text-white" : "bg-white"
          }`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/statistics'}>Statistics</NavLink>
                        <NavLink to={'/dashboard'}>Dashboard</NavLink>
                        <NavLink to={'/trending'}>Trending</NavLink>
                    </ul>
                </div>
                <NavLink to={'/'} className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <NavLink className={({isActive}) => `${isActive? 'font-bold underline': ''} hover:text-warning`} to={'/'}>Home</NavLink>
                    <NavLink className={({isActive}) => `${isActive? 'font-bold underline': ''} hover:text-warning`} to={'/statistics'}>Statistics</NavLink>
                    <NavLink className={({isActive}) => `${isActive? 'font-bold underline': ''} hover:text-warning`} to={'/dashboard'}>Dashboard</NavLink>
                    <NavLink className={({isActive}) => `${isActive? 'font-bold underline': ''} hover:text-warning`} to={'/trending'}>Trending</NavLink>
                   
                </ul>
            </div>
            <div className="navbar-end gap-4 text-black">
                <Link className="p-2 rounded-full"> <IoCartOutline size={'20'}> </IoCartOutline> </Link>
                <Link className="p-2 rounded-full"> <MdFavoriteBorder size={'20'}> </MdFavoriteBorder>  </Link>
            </div>
        </div>
    )
}

export default Navbar