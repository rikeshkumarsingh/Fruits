import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Dashboard from './dashboard'
import { Outlet } from 'react-router-dom';

const Homepages = () => {
  
    return (
        <div>
            <Navbar></Navbar>
            {/* <Dashboard></Dashboard> */}
            <Outlet />
           <Footer></Footer>
        </div>
    )
}

export default Homepages