import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardProperty from '../Properties/Cards/CardProperty'
import './favorites.css'
import title from './Images/title_favorites.png'



const Favorites = () => {
    const { Favorites } = useSelector((store) => store.Favorites)
    return (
        <div className='container-favorites'>
            <img src={title} alt='Favorites' className='title-favorites'/>
            <div className='container-favorites-properties'>
                {
                    Favorites.map((property, index) => (
                        <Link style={{ textDecoration: 'none', color: 'black' }} key={index} to={`/Detail/${property?.property_title}`}>
                            <CardProperty favorite={true} property={property} key={index} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites