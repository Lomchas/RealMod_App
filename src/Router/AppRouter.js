import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRouter = () => {
  const [Auth, setAuth] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      if (user?.uid) {
        setAuth(true)
      }
      else {
        setAuth(false)
      }
    })
  }, [setAuth])




  return (
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <PublicRoutes auth={Auth}>
              <Login />
            </PublicRoutes>
          } />

          <Route path='/Register' element={
            <PublicRoutes auth={Auth}>
              <Register />
            </PublicRoutes>
          } />

          <Route path='/*' element={
            <PrivateRoutes auth={Auth}>
              <DashboardRoutes />
            </PrivateRoutes>
          } />

        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter