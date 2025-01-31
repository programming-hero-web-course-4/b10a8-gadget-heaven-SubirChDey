import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Categories = ({ categories }) => {
    return (
        <div>
            <div className="flex flex-wrap lg:flex-col justify-start items-center gap-3 w-full max-w-xs lg:w-60 mt-10 sm:mt-16 lg:mt-20">
                {categories.map((category) => (
                    <NavLink
                        key={category.category}
                        to={`/category/${category.category}`}
                        role="tab"
                        className={({ isActive }) =>
                            `w-full sm:w-9/12 md:w-10/12 lg:w-full px-4 py-2 text-sm sm:text-base md:text-lg text-center font-medium rounded-full shadow-md transition-all
        ${isActive ? 'bg-[#9538E2] text-white border border-[#9538E2] shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-200'}`
                        }
                    >
                        {category.category}
                    </NavLink>
                ))}
            </div>


        </div>
    )
}

export default Categories