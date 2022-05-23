import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteCarSync } from '../../../Redux/Actions/ActionCar';
import './cardModal.css'


export const CardModal = ({ property }) => {
    const dispatch = useDispatch()

    const deletePropertyCar = () => {
        dispatch(deleteCarSync(property?.property_title))
    }

    return (
        <div className='container-card-modal'>
            <div className='picture-card-modal'>
                <img src={property ? property?.property_photo : ''} alt='product' />
            </div>
            <div className='info-card-modal'>
                <h5>{property ? property.property_title : 'CyberPunk standard edition - PlayStation 4'}</h5>
                <p>{property ? property.property_price : '230.000$'}</p>
            </div>
            <div className='container-eliminar'>
                <button type='button' onClick={deletePropertyCar}>
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}
