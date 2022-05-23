import React, { useEffect } from 'react'
import './cardProperty.css'
import { GrLocation } from "react-icons/gr";
import roomsIcon from './Images/RoomsIcon.png'
import bathsIcon from './Images/BathsIcon.png'
import sizesIcon from './Images/SizesIcon.png'
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addCarSync } from '../../../Redux/Actions/ActionCar';
import { actionAddFavoriteSync } from '../../../Redux/Actions/ActionFavorites';

const CardProperty = ({setIsActive, property, favorite}) => {
    const dispatch = useDispatch()

    const aggCar = () => {
        dispatch(addCarSync(property))
        alert('Se agrego al Carrito')
        window.scrollTo({top: '0'})
    }

    const addFavorite = () => {
        dispatch(actionAddFavoriteSync(property))
        alert('Se añadio a Favoritos')
        window.scrollTo({top: '0'})
    }

    useEffect(() => {
      
    }, [setIsActive])
    

  return (
    <div className='container-car_property'>
        <div className='container-img-card-property'>
            <img src={property?.property_photo} alt='ImageProperty'/>
        </div>
        <div className='container-main-info'>
            <span className='type-property-action'>{property?.property_post_type}</span>
            {
                property?.property_post_type === 'For Buy' ?
                <h3 className='price-property'>{`$${property?.property_price}`}</h3>
                : <h3 className='price-property'>{`$${property?.property_price}/mo`}</h3>
            }
        </div>
        <div className='info-property-card'>
            <h3 className='type-property-place'>{property?.property_type_build}</h3>
            <h3 className='title-property-card'>{property?.property_title}</h3>
            <h3 className='location-property-card'>
               <GrLocation/> 
               {property?.property_location}
            </h3>
        </div>
        <div className='container-property-parts-card'>
            <h3 className='rooms-property parts'>
                <img src={roomsIcon} alt='beds'/>
                {`Beds ${property?.property_beds}`}
            </h3>
            <h3 className='baths-property parts'>
                <img src={bathsIcon} alt='Baths'/>
                {`Baths ${property?.property_bathrooms}`}
            </h3>
            <h3 className='size-property parts'>
                <img src={sizesIcon} alt='Sizes'/>
                {`${property?.property_size} Sqft`}
            </h3>
        </div>
        <div className='container-btns-actions-card'>
            <button type='button' className='AggFavorites' id={favorite ? 'activeFavorite' : ''} onClick={addFavorite}>
                <AiOutlineHeart/>
            </button>
            <button type='button' className='AggCar' onClick={aggCar}>
                <MdOutlineAddCircleOutline/>
            </button>
        </div>
    </div>

  )
}

export default CardProperty