import React from 'react'
import './cardProperty.css'
import { GrLocation } from "react-icons/gr";
import roomsIcon from './Images/RoomsIcon.png'
import bathsIcon from './Images/BathsIcon.png'
import sizesIcon from './Images/SizesIcon.png'
import proof from './Images/proof.png'


const CardProperty = () => {
  return (
    <div className='container-car_property'>
        <div className='container-img-card-property'>
            <img src={proof} alt='ImageProperty'/>
        </div>
        <div className='container-main-info'>
            <span className='type-property-action'>For Buy</span>
            <h3 className='price-property'>{`$${'20.000'}/mo`}</h3>
        </div>
        <div className='info-property-card'>
            <h3 className='type-property-place'>Apartments</h3>
            <h3 className='title-property-card'>Triple Story house for Rent </h3>
            <h3 className='location-property-card'>
               <GrLocation/> 
               {'Loulsiana, California'}
            </h3>
        </div>
        <div className='container-property-parts-card'>
            <h3 className='rooms-property parts'>
                <img src={roomsIcon} alt='beds'/>
                {`Beds ${'4'}`}
            </h3>
            <h3 className='baths-property parts'>
                <img src={bathsIcon} alt='Baths'/>
                {`Baths ${'3'}`}
            </h3>
            <h3 className='size-property parts'>
                <img src={sizesIcon} alt='Sizes'/>
                {`${'2200'} Sqft`}
            </h3>
        </div>
    </div>

  )
}

export default CardProperty