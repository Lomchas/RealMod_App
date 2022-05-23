import React, { useEffect } from 'react'
import './destacadas.css'
import CardProperty from '../Properties/Cards/CardProperty'
import title from './Images/title-ourFeaturedProperties.png'
import { useDispatch, useSelector } from 'react-redux'
import { actionListAsync } from '../../Redux/Actions/ActionProperties'


const Destacadas = ({setIsActive}) => {
  const {Properties} = useSelector((store) => store.Properties)
  const dispatch = useDispatch()

  const traerProperties = () => {
    dispatch(actionListAsync())
  }

  useEffect(() => {
    traerProperties()
  }, [])
  

  return (
    <div className='container-our-featured-properties' id='PropertiesFeatured'>
        <img src={title} alt='title' className='title-our-featured-properties'/>
        <div className='cotainer-our-featured-properties-cards'>
            {
              Properties?.map((property, index) => (
                <CardProperty setIsActive={setIsActive} property={property} key={index}/>
              ))
            }
        </div>
    </div>
  )
}

export default Destacadas