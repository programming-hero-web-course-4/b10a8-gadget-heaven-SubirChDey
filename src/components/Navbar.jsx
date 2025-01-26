import { Link, NavLink } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar bg-[#9538E2] w-11/12 mx-auto rounded-t-2xl mt-4 text-white lg:px-10 lg:pt-8">
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
                        <NavLink to={''}>Statistics</NavLink>
                        <NavLink to={'dashboard'}>Dashboard</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-14">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={''}>Statistics</NavLink>
                    <NavLink to={'dashboard'}>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-4 text-black">
                <Link className="p-2 rounded-full bg-yellow-100"> <IoCartOutline size={'20'}> </IoCartOutline> </Link>
                <Link className="p-2 rounded-full bg-yellow-100"> <MdFavoriteBorder size={'20'}> </MdFavoriteBorder>  </Link>
            </div>
        </div>
    )
}

export default Navbar