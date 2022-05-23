import React from 'react'
import Agents from '../Agents/Agents'
import Destacadas from '../Destacadas/Destacadas'
import Featured from '../FeaturedListing/Featured'
import Banner from '../NavBar/Banner/Banner'
import './home.css'
import aboutUs from '../../Images/About-component.png'
import apartmentPlan from '../../Images/ApartmentsPlan.png'
import OurPartners from '../../Images/OurPartnersComponent.png'
import footer from '../../Images/footer1.png'
import footer2 from '../../Images/footer2.png'


const Home = ({setIsActive}) => {  
  return (
    <div className='container-home'>
      <Banner />
      <Featured />
      <Destacadas setIsActive={setIsActive} />
      <Agents />
      <div className='container-about' id='about'>
        <img src={aboutUs} alt='About Us'/>
      </div>
      <div className='container-Apartments-plan'>
        <img src={apartmentPlan} alt='apartments plan'/>
      </div>
      <div className='container-our-partners'>
        <img src={OurPartners} alt='Partners'/>
      </div>
      <div className='container-footer' id='contact'>
        <img src={footer} alt='footer1'/>
        <img src={footer2} alt='footer2'/>
      </div>
    </div>
  )
}

export default Home