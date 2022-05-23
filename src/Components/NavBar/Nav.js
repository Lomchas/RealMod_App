import React from 'react'
import './nav.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BsHeart } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { HiLogout } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import logo from '../../Images/Logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { actionLogoutAsync } from '../../Redux/Actions/ActionUsers';


const Nav = ({setIsActived, isActive}) => {
    const dispatch = useDispatch()
    const {Car} = useSelector((store) => store.Car)
    const {user} = useSelector((store) => store.users)
    const {Favorites} = useSelector((store) => store.Favorites)
    const location = useLocation()
    const navigate = useNavigate()
    const goToAdd = () => {
        navigate('/AddProperty')
    }

    const goToFavorites = () => {
        navigate('/Favorites')
    }

    const goToPorfile = () => {
        navigate(`/Porfile/${user[0]?.name}`)
    }

    const abrirModal = () => {
        setIsActived(true)
      }

      const handleLogout = () => {
          dispatch(actionLogoutAsync())
          alert('Cerraste Sesion')
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
                    <li><a href='#about' className='item-nav'>About</a></li>
                    <li><a href='#PropertiesFeatured' className='item-nav'>Property</a></li>
                    <li><a href='#agentes' className='item-nav'>Agents</a></li>
                    <li><a href='#contact' className='item-nav'>Contact</a></li>
                </ul>
            </nav>

            <div className='container-actions-nav'>
                <div className='items-actions-nav favorites' id={location.pathname === '/Favorites' ? 'active' : ''} onClick={goToFavorites}>
                    <span className='count favorites'>{Favorites ? Favorites.length : 0}</span>
                    <BsHeart />
                </div>
                <div className='items-actions-nav carStore' id={isActive ? 'active' : ''} onClick={abrirModal}>
                    <span className='count carStore'>{Car ? Car.length : '0'}</span>
                    <FiShoppingCart />
                </div>
                <div className='items-actions-nav userPorfile' id={location.pathname === `/Porfile/${user?.name}` ? 'active' : ''} onClick={goToPorfile}>
                    <BiUserPin />
                </div>
                <div className='items-actions-nav logout' onClick={handleLogout}>
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