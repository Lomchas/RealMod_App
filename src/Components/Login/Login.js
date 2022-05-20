import React, { useEffect, useState } from 'react'
import './login.css'
import Loader from '../Loader/Loader'
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import { FormikComponentLogin } from '../Formik/formik';
import { useDispatch } from 'react-redux';
import { actionFacebook, actionGoogle } from '../../Redux/Actions/ActionUsers';



const Login = () => {
    const dispatch = useDispatch()
    const [Loading, setLoading] = useState(true)

    const handleGoogle = () => {
        dispatch(actionGoogle())
    }

    const handleFacebook = () => {
        dispatch(actionFacebook())
    }


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
                    <h2 className='title-item'>Inicio sesión</h2>
                    <FormikComponentLogin/>
                    <button className='google-btn' onClick={handleGoogle}>
                        <p>Continuar con Google</p>
                        <FcGoogle fontSize='30px'/>
                    </button>
                    <button className='facebook-btn' onClick={handleFacebook}>
                        <p>Continuar con Facebook</p>
                        <GrFacebook fontSize='30px'/>
                    </button>
                    <p>¿Aun no tienes cuenta? <Link className='link-to-register' to='/Register'>Registrate aqui...</Link> </p>
                </div>
            </div>
    )
}

export default Login