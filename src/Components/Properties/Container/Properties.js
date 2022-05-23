import React, { useCallback, useEffect, useState } from 'react'
import CardProperty from '../Cards/CardProperty'
import './properties.css'
import title_parking_space from './Images/title-parking-space.png'
import title_swimming_pool from './Images/title-swimming-pool.png'
import title_private_security from './Images/title-private-security.png'
import title_medical_center from './Images/title-medical-center.png'
import title_library_area from './Images/title-library-area.png'
import title_king_beds from './Images/title-king-beds.png'
import title_smart_home from './Images/title-smart-home.png'
import title_kids_playland from './Images/title-kids-playland.png'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actionListAsync } from '../../../Redux/Actions/ActionProperties'



const Properties = () => {
  const location = useLocation()
  console.log(location.pathname)
  const [propertiesFiltered, setPropertiesFiltered] = useState([])
  const [title, setTitle] = useState('')

  const {Properties} = useSelector((store) => store.Properties)
  const dispatch = useDispatch()

  const traerProperties = useCallback(() => {
    dispatch(actionListAsync())
  },[dispatch])



  const FunctionFiltered = useCallback(() => {
    switch (location.pathname) {
      case '/Properties/Parking_space':
        setPropertiesFiltered(Properties.filter((property) => property.parking_property === true))
        setTitle(title_parking_space)
        break; 
      case '/Properties/Swimming_pool':
        setPropertiesFiltered(Properties.filter((property) => property.pool_property === true))
        setTitle(title_swimming_pool)
        break;
      case '/Properties/Private_security':
        setPropertiesFiltered(Properties.filter((property) => property.security_property === true))
        setTitle(title_private_security)
        break;
      case '/Properties/Medical_center':
        setPropertiesFiltered(Properties.filter((property) => property.medicalCenter_property === true))
        setTitle(title_medical_center)
        break;
      case '/Properties/Library_area':
        setPropertiesFiltered(Properties.filter((property) => property.library_property === true))
        setTitle(title_library_area)
        break;
      case '/Properties/King_beds':
        setPropertiesFiltered(Properties.filter((property) => property.kingBeds_property === true))
        setTitle(title_king_beds)
        break;
      case '/Properties/Smart_home':
        setPropertiesFiltered(Properties.filter((property) => property.smart_property === true))
        setTitle(title_smart_home)
        break;
      case '/Properties/Kids_playland':
        setPropertiesFiltered(Properties.filter((property) => property.playland_property === true))
        setTitle(title_kids_playland)
        break;
      default:
        break
    }
  },[Properties, location.pathname])


  useEffect(() => {
    window.scrollTo({top: 0})
    FunctionFiltered()
    traerProperties()
  }, [location, FunctionFiltered, traerProperties])
  

  return (
    <div className='container-properties-all'>
      <img src={title} alt='Title-Properties' className='title-properties'/>
      <div className='container-list-properties'>
        {
          propertiesFiltered.map((property, index) => (
            <Link style={{textDecoration: 'none', color: 'black'}} key={index} to={`/Detail/${property?.property_title}`}>
              <CardProperty property={property} id={index}/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Properties