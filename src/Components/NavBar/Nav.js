import React from 'react'
import './nav.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsHeart } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { HiLogout } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import logo from '../../Images/Logo.png'


const Nav = () => {
    const navigate = useNavigate()
    const goToAdd = () => {
        navigate('/AddProperty')
    }


    return (
        <div className='container-nav'>

            <div className='contianer-logo'>
                <Link to='/*'>
                    <img width='150px' src={logo} alt='RealMod' />
                </Link>
            </div>

            <nav>
                <ul className='list-nav'>
                    <li><NavLink className={(navData) => navData.isActive ? 'item-nav active' : 'item-nav'} to='/*'>Home</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? 'item-nav active' : 'item-nav'} to='/'>About</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? 'item-nav active' : 'item-nav'} to='/'>Property</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? 'item-nav active' : 'item-nav'} to='/'>Agents</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? 'item-nav active' : 'item-nav'} to='/'></NavLink></li>
                </ul>
            </nav>

            <div className='container-actions-nav'>
                <div className='items-actions-nav favorites'>
                    <span className='count favorites'>{'0'}</span>
                    <BsHeart />
                </div>
                <div className='items-actions-nav carStore'>
                    <span className='count carStore'>{'0'}</span>
                    <FiShoppingCart />
                </div>
                <div className='items-actions-nav userPorfile'>
                    <BiUserPin />
                </div>
                <div className='items-actions-nav logout'>
                    <HiLogout />
                </div>
            </div>

            <button className='admin-zone' onClick={goToAdd}>
                <span type='button'>
                    <AiFillPlusCircle />
                </span>
                    <p>Add property</p>
            </button>

        </div>
    )
}

export default Nav