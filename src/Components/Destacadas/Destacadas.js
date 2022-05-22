import React from 'react'
import './destacadas.css'
import CardProperty from '../Properties/Cards/CardProperty'
import title from './Images/title-ourFeaturedProperties.png'


const Destacadas = () => {
  return (
    <div className='container-our-featured-properties'>
        <img src={title} alt='title' className='title-our-featured-properties'/>
        <div className='cotainer-our-featured-properties-cards'>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
        </div>
    </div>
  )
}

export default Destacadas