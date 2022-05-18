import React from 'react'
import Loading from './Loader.gif'
import logo from './Logo.png'
import './loader.css'

const Loader = () => {
  return (
    <div className='container-loader'>
        <img width='100px' src={Loading} alt='Cargando...'/>
        <img width='200px' src={logo} alt='RealMod - App'/>
    </div>
  )
}

export default Loader