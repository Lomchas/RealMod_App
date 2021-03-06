import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import Loader from '../Loader/Loader';
import './register.css'
import { FormikComponentRegister } from '../Formik/formik';
 

const Register = () => {
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
            <div className='container-register'>
                <img src={logo} alt='Realmod' />
                <div className='form-register'>
                    <h2 className='title-item'>Registrate</h2>
                    <FormikComponentRegister/>
                    <p>¿Ya tienes cuenta? <Link className='link-to-register' to='/'>Iniciar Sesión</Link> </p>
                </div>
            </div>
    )
}

export default Register