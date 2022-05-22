import React from 'react'
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
    </div>
  )
}

export default Home