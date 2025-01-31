import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-450px)]'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer />
    </div>
  )
}

export default MainLayout