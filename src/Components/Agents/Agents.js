import React from 'react'
import './agents.css'
import CardAgent from './CardAgent.js/CardAgent'
import title from './Images/title-agents.png'

const Agents = () => {
  return (
    <div className='container-agents'>
        <img src={title} alt='title' className='title-Agents'/>
        <div className='container-agents-cards'>
            <CardAgent/>
            <CardAgent/>
            <CardAgent/>
            <CardAgent/>
            <CardAgent/>
        </div>
    </div>
  )
}

export default Agents