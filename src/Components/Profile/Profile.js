import React from 'react'
import './profile.css'
import title from './Images/title-profile.png'
import { useSelector } from 'react-redux'



const Profile = () => {
  const {user} = useSelector((store) => store.users)
  return (
    <div className='container-profile'>
        <img src={title} alt='Profile' className='title'/>
        <div className='item-profile'>
          <div className='container-photo'>
            <img src={user[0]?.image} alt='Cargando...'/>
          </div>
          <div className='container-info'>
            <h3 className='container-name'>{user[0]?.name}</h3>
            <h3 className='container-email'>{user[0]?.email}</h3>
          </div>
        </div>
    </div>
  )
}

export default Profile