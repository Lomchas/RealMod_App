import React, { useEffect, useState } from 'react'
import './login.css'
import Loader from '../Loader/Loader'
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png'

const Login = () => {
    const [Loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, [2000])

    useEffect(() => {

    }, [Loading])


    return (

        Loading ?
            <Loader />
            :
            <div className='container-login'>
                <img src={logo} alt='Realmod'/>
                <div className='form-login'>
                    <h2 className='title-item'>Inicio Sesión</h2>
                    <form>
                        <input type='text' name='email' placeholder='Correo Electronico' />
                        <input type='password' name='pass' placeholder='Contraseña' />
                        <button type='submit'>Iniciar</button>
                    </form>
                    <button className='google-btn'>
                        Continuar con Google
                        <FcGoogle fontSize='30px'/>
                    </button>
                    <button className='facebook-btn'>
                        Continuar con Facebook
                        <GrFacebook fontSize='30px'/>
                    </button>
                    <p>¿Aun no tienes cuenta? <Link className='link-to-register' to='/Register'>Registrate aqui...</Link> </p>
                </div>
            </div>
    )
}

export default Login