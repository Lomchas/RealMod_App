import React, { useEffect, useState } from 'react'
import './modalCar.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from 'react-redux';
import logo from './Images/Logo.png'
import { CardModal } from './CardModal/CardModal';


const ModalCar = ({isActive }) => {
    const { Car } = useSelector(store => store.Car)
    const [totalCar, setTotalCar] = useState()
    const salirModal = () => {
        isActive(false)
    }

    const handleTotalCar = () => {
        const prices = Car.map((property, index) => Number(property.property_price))
        setTotalCar(prices.reduce((previus, current, index) => previus + current, 0))
    }

    const salirModalSpecial = ({ target }) => {
        const clase = target.className;
        if (clase === 'container-modal') {
            isActive(false)
        }
    }

   useEffect(() => {
    handleTotalCar()
     console.log(Car.length)
   }, [Car])

  return (
    <div className='container-modal' onClick={salirModalSpecial}>
        <div className='modal-item'>
                <div className='header-car'>
                    <h2>Carrito de Compras {''}<span className='numero-productos'>{Car.length}</span></h2>
                    <AiOutlineCloseCircle className='icon-salir' onClick={salirModal} />
                </div>
                <hr />
                <div className='body-car'>
                    {
                        Car.length === 0
                            ?
                            <div className='container-noProducts'>
                                <img src={logo} alt='Carrito vacio...' />
                                <button type='button' className='btn-add-product-modal' onClick={salirModal}>Añadir productos al Carrito</button>
                            </div>
                            :
                            <div className='container-products'>
                                {
                                    Car?.map((property, index) => (
                                        <CardModal property={property} key={index} />
                                    ))
                                }
                            </div>
                    }

                </div>
                <hr />
                <div className='footer-car'>
                    <div className='container-info-purchase'>
                        <button className='btn-pagar'>Pagar</button>
                        <p className='total-pay'>Total: <span className='total-a-pagar'>{totalCar}</span></p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ModalCar