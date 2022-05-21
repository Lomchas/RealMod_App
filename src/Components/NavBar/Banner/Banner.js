import React from 'react'
import './banner.css'
import { BiSearch } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";

const Banner = () => {
    return (
        <div className='container-banner'>

            <div className='container-searching'>
                <div className='container-filter'>
                    <button type='button'>Sell</button>
                    <button type='button'>Buy</button>
                    <button type='button'>Rent</button>
                </div>


                <div className='container-bar-searching'>

                    <input type='text' name='search' placeholder='Enter keyword here ...' />

                    <select>
                        <option defaultValue>Select Location</option>
                        <option>Medellin</option>
                        <option>Cali</option>
                        <option>Bogota</option>
                        <option>Sta Marta</option>
                        <option>Barranquilla</option>
                        <option>Manizales</option>
                        <option>Pereira</option>
                        <option>Cartagena</option>
                    </select>

                    <div className='container-btn-search'>
                        <CgOptions className='icon'/>
                        <button type='submit'>
                            <BiSearch />
                            Search
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner