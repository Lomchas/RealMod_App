import React, { useEffect, useState } from 'react'
import './login.css'
import Loader from '../Loader/Loader'
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png'
// import { useFormik } from 'formik';
// import * as Yup from 'yup'
import { FormikComponentLogin } from '../Formik/formik';



const Login = () => {
    const [Loading, setLoading] = useState(true)

    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         pass: ''
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup.string().email('El correo debe ser tipo email! example: a@gmail.com').required(),
    //         pass: Yup.string().min(7, 'La contraseña debe tener mas de 7 caracteres').max(15, 'La contraseña solo puede tener maximo 15 caracteres').required()
    //     }),
    //     onSubmit: (data) => {
    //         console.log(data)
    //     }
    // })



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