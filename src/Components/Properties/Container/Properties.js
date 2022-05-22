import React from 'react'
import CardProperty from '../Cards/CardProperty'
import './properties.css'
import title_parking_space from './Images/title-parking-space.png'
import { Link } from 'react-router-dom'



const Properties = () => {
  return (
    <div className='container-properties-all'>
      <img src={title_parking_space} alt='Title-Properties' className='title-properties' />
      <div className='container-list-properties'>
        <Link to='/*' className='link-cardDetalle'>
          <CardProperty />
        </Link>
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
      </div>
    </div>
  )
}

export default Properties