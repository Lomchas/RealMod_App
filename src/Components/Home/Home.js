import React from 'react'
import Agents from '../Agents/Agents'
import Destacadas from '../Destacadas/Destacadas'
import Featured from '../FeaturedListing/Featured'
import Banner from '../NavBar/Banner/Banner'
import './home.css'


const Home = () => {
  return (
    <div className='container-home'>
      <Banner/>
      <Featured/>
      <Destacadas/>
      <Agents/>
    </div>
  )
}

export default Home