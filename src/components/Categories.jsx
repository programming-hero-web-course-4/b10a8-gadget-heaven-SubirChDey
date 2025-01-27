import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Categories = ({ categories }) => {
    return (
        <div>
            <div className=" flex flex-col justify-start items-start gap-5 w-60 mt-20">
                {/* <NavLink className="tab tab-active">All Products</NavLink>
                <NavLink className="tab">Laptops</NavLink>
                <NavLink className="tab">Phones</NavLink>
                <NavLink className="tab">Smart Watches</NavLink>
                <NavLink className="tab">MacBook</NavLink>
                <NavLink className="tab">iPhone</NavLink> */}

                {
            categories.map(category =>(
                <NavLink key={category.category} to={`/category/${category.category}`} role='tab' className={({isActive}) => `tab ${isActive?'tab-active border border-[#9538E2] bg-[#9538E2] text-white': 'bg-white'}  w-10/12 rounded-full items-center flex justify-center text-center pb-8 pt-2`} > {category.category}
                  </NavLink>)
            )

          }

                  
        </div>

        </div>
    )
}

export default Categories