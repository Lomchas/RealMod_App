import React from 'react'
import './cardAgents.css'
import contactIcon from '../Images/contactIcon.png'
import proof from '../Images/proof.png'


const CardAgent = () => {
  return (
    <div className='container-card-agent'>
        <div className='container-photo-agent'>
            <img src={proof} alt='photo_Agent'/>
        </div>
        <div className='container-numb-listing-agent'>
            <span className='listing-agent'>{`${'08'} Listing`}</span>
        </div>
        <div className='container-info-agent'>
            <h3 className='name-agent'>{`Andren Willium`}</h3>
            <h3 className='name-agency'>{`Sweet Home`}</h3>
            <h3 className='contact-agent'>
                <img src={contactIcon} alt='icon'/>
                {`Call: ${'+123 456 78 90'}`}
            </h3>
        </div>
    </div>
  )
}

export default CardAgent