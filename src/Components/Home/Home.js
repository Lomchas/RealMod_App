import React from 'react'
import Banner from '../NavBar/Banner/Banner'
import Nav from '../NavBar/Nav'
import './home.css'


const Home = () => {
  return (
    <div className='container-home'>
      <Nav/>
      <Banner/>
    </div>
  )
}

export default Home