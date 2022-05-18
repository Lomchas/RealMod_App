import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'

const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<Home/>}/>
    </Routes>
    )
}

export default DashboardRoutes