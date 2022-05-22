import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetalleCardProperty from '../Components/DetalleCardProperty/DetalleCardProperty'
import Home from '../Components/Home/Home'
import Nav from '../Components/NavBar/Nav'
import Properties from '../Components/Properties/Container/Properties'


const DashboardRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Properties/:type' element={<Properties/>} />
        <Route path='/Detail/:property' element={<DetalleCardProperty/>} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes