import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../NavBar/Navbar'

const Layout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
        <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout