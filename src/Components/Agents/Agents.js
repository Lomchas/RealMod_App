import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionListAgentsAsync } from '../../Redux/Actions/ActionAgents'
import './agents.css'
import CardAgent from './CardAgent.js/CardAgent'
import title from './Images/title-agents.png'

const Agents = () => {

  const dispatch = useDispatch()
  const {Agents} = useSelector((store) => store.Agents)
  const traerAgents = () => {
    dispatch(actionListAgentsAsync())
  }


  useEffect(() => {
    traerAgents()
  }, [])
  


  return (
    <div className='container-agents' id='agentes'>
        <img src={title} alt='title' className='title-Agents'/>
        <div className='container-agents-cards'>
            {
              Agents.map((agent) => (
                <CardAgent Agent={agent} key={agent?.id}/>
              ))
            }
        </div>
    </div>
  )
}

export default Agents