import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProperty from '../Components/AddProperty/AddProperty'
import DetalleCardProperty from '../Components/DetalleCardProperty/DetalleCardProperty'
import Favorites from '../Components/Favorites/Favorites'
import Home from '../Components/Home/Home'
import ModalCar from '../Components/ModalCarrito/ModalCar'
import Nav from '../Components/NavBar/Nav'
import Profile from '../Components/Profile/Profile'
import Properties from '../Components/Properties/Container/Properties'


const DashboardRoutes = () => {
  const [activeModalCar, setActiveModalCar] = useState(false)

  useEffect(() => {
    
  }, [activeModalCar])
  
  return (
    <>
      <Nav setIsActived={setActiveModalCar} isActive={activeModalCar}/>
      <Routes>
        <Route path='/' element={<Home setIsActive={setActiveModalCar}/>} />
        <Route path='/Properties/:type' element={<Properties/>} />
        <Route path='/AddProperty' element={<AddProperty/>} />
        <Route path='/Favorites' element={<Favorites/>} />
        <Route path='/Porfile/:name' element={<Profile/>} />
        <Route path='/Detail/:property' element={<DetalleCardProperty/>} />
        <Route path='/*' element={<Home />} />
      </Routes>
      {
        activeModalCar
          ? <ModalCar isActive={setActiveModalCar} />
          : ''
      }
    </>
  )
}

export default DashboardRoutes