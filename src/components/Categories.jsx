import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Categories = ({ categories }) => {
    return (
        <div>
            <div className="flex flex-row lg:flex-col justify-start items-start gap-5 w-60 mt-20">                

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