import React from 'react'
import './featured.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import title from './Images/titleFeatured.png'
import parking from './Images/parking-area.svg'
import Swimming from './Images/swimming-pool.svg'
import privateSecurity from './Images/private-security.svg'
import MedicalCenter from './Images/medical-center.svg'
import LibraryArea from './Images/library-area.svg'
import bedsKings from './Images/king-size-beds.svg'
import smartHomes from './Images/smart-homes.svg'
import KidsPlace from './Images/kids-playland.svg'
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div className='container-featured_listing'>
            <div className='title-seccion'>
                <img src={title} alt='Featured Listing' />
            </div>
            <div className='container-properties'>

                <Link className='Link-featured' to={`/Properties/${`featuredType`}`}>
                    <div className='card-property'>
                        <div className='container-img-card-property'>
                            <img src={parking} alt='img-card' />
                        </div>
                        <div className='container-title-card-property'>
                            <h2 className='title-property'>Parking Space</h2>
                        </div>
                        <div className='action-card-property'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Link>

                <Link className='Link-featured' to={`/Properties/${`featuredType`}`}>
                    <div className='card-property'>
                        <div className='container-img-card-property'>
                            <img src={Swimming} alt='img-card' />
                        </div>
                        <div className='container-title-card-property'>
                            <h2 className='title-property'>Swimming Pool</h2>
                        </div>
                        <div className='action-card-property'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Link>

                <Link className='Link-featured' to={`/Properties/${`featuredType`}`}>
                    <div className='card-property'>
                        <div className='container-img-card-property'>
                            <img src={privateSecurity} alt='img-card' />
                        </div>
                        <div className='container-title-card-property'>
                            <h2 className='title-property'>Private Security</h2>
                        </div>
                        <div className='action-card-property'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Link>

                <Link className='Link-featured' to={`/Properties/${`featuredType`}`}>
                    <div className='card-property'>
                        <div className='container-img-card-property'>
                            <img src={MedicalCenter} alt='img-card' />
                        </div>
                        <div className='container-title-card-property'>
                            <h2 className='title-property'>Medical Center</h2>
                        </div>
                        <div className='action-card-property'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Link>

                <Link className='Link-featured' to={`/Properties/${`featuredType`}`}>
                    <div className='card-property'>
                        <div className='container-img-card-property'>
                            <img src={LibraryArea} alt='img-card' />
                        </div>
                        <div className='container-title-card-property'>
                            <h2 className='title-property'>Library Area</h2>
                        </div>
                        <div className='action-card-property'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Link>

                <Link className='Link-featured' to={`/Properties/${`featuredType`}`}>
                    <div className='card-property'>
                        <div className='container-img-card-property'>
                            <img src={bedsKings} alt='img-card' />
                        </div>
                        <div className='container-title-card-property'>
                            <h2 className='title-property'>King Size Beds</h2>
                        </div>
                        <div className='action-card-property'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Link>

                <Link className='Link-featured' to={`/Properties/${`featuredType`}`}>
                    <div className='card-property'>
                        <div className='container-img-card-property'>
                            <img src={smartHomes} alt='img-card' />
                        </div>
                        <div className='container-title-card-property'>
                            <h2 className='title-property'>Smart Homes</h2>
                        </div>
                        <div className='action-card-property'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Link>

                <Link className='Link-featured' to={`/Properties/${`featuredType`}`}>
                    <div className='card-property'>
                        <div className='container-img-card-property'>
                            <img src={KidsPlace} alt='img-card' />
                        </div>
                        <div className='container-title-card-property'>
                            <h2 className='title-property'>Kids Playland</h2>
                        </div>
                        <div className='action-card-property'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Featured