import React from 'react'
import { useEffect } from "react";

const ErrorPage = () => {
      useEffect(() => {
        document.title = "Error | Gadget heaven";
      }, []);
    return (
        <div>
            <div>
                <p className='text-3xl items-center text-center h-96'>
                    Page now found. Please, type right URL
                </p>
            </div>
        </div>  
    )
}

export default ErrorPage