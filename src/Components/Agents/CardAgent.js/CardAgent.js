import React from 'react'
import './cardAgents.css'
import contactIcon from '../Images/contactIcon.png'


const CardAgent = ({Agent}) => {
  return (
    <div className='container-card-agent'>
        <div className='container-photo-agent'>
            <img src={Agent?.image} alt='photo_Agent'/>
        </div>
        <div className='container-numb-listing-agent'>
            <span className='listing-agent'>{`${Agent?.listing} Listing`}</span>
        </div>
        <div className='container-info-agent'>
            <h3 className='name-agent'>{Agent?.nombre}</h3>
            <h3 className='name-agency'>{Agent?.agencia}</h3>
            <h3 className='contact-agent'>
                <img src={contactIcon} alt='icon'/>
                {`Call: ${Agent?.tel}`}
            </h3>
        </div>
    </div>
  )
}

export default CardAgent