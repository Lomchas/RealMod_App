import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { actionEmailAndPass, actionRegisterAsync } from '../../Redux/Actions/ActionUsers'



// ----------------------------------------- validations SignUp ---------------------------------//
const signUpSchema = Yup.object().shape({
    nombre: Yup.string().required('Este campo es obligatorio'),
    email: Yup.string().email('Tiene que poner un correo (example: a@gmail.com)').required('Este campo es obligatorio'),
    pass: Yup.string().min(7, 'Las contraseñas deben tener minimo 7 caracteres').required('Este campo es obligatorio'),
    pass2: Yup.string().oneOf([Yup.ref('pass')], 'Las contraseñas no coinciden').required('Este campo es obligatorio')
})


// ----------------------------------------- validations Login ---------------------------------//
const LoginSchema = Yup.object().shape({
    email: Yup.string().email('El correo debe ser tipo email').required('Campo Obligatorio'),
    pass: Yup.string().min(7, 'Las contraseñas deben tener minimo 7 caracteres').required('Campo Obligatorio'),
})



// ----------------------------------------- Component Register ---------------------------------//
export const FormikComponentRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <Formik
            initialValues={{
                nombre: '',
                email: '',
                pass: '',
                pass2: ''
            }}
            validationSchema={signUpSchema}
            onSubmit={values => {
                console.log(values)
                dispatch(actionRegisterAsync(values.nombre, values.email, values.pass))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Has sido registrado',
                    text: '¡Vamos a iniciar Sesion!',
                    showConfirmButton: false,
                    timer: 3000
                  })
                navigate('/')
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field type='text' name='nombre' placeholder='Ingresa tu nombre' />
                    {errors.nombre && touched.nombre ? (<p className='validationMensage'>{errors.nombre}</p>) : null}
                    <Field type='email' name='email' placeholder='Ingresa tu correo' />
                    {errors.email && touched.email ? (<p className='validationMensage'>{errors.email}</p>) : null}
                    <Field autoComplete='none' type='password' name='pass' placeholder='Ingresa una contraseña' />
                    {errors.pass && touched.pass ? (<p className='validationMensage'>{errors.pass}</p>) : null}
                    <Field autoComplete='none' type='password' name='pass2' placeholder='Ingresa otra vez tu contraseña' />
                    {errors.pass2 && touched.pass2 ? (<p className='validationMensage'>{errors.pass2}</p>) : null}
                    <button type='submit'>Continuar</button>
                </Form>
            )}
        </Formik>
    )
}


// ----------------------------------------- Component Login ---------------------------------//
export const FormikComponentLogin = () => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                email: '',
                pass: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {
                console.log(values)
                dispatch(actionEmailAndPass(values.email, values.pass))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Bienvenido RealMod',
                    text: 'Comencemos',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name='email' placeholder='Correo Electronico' type='email' />
                    {errors.email && touched.email ? (<p className='validationMensage'>{errors.email}</p>) : null}
                    <Field autoComplete='none' name='pass' placeholder='Contraseña' type='password' />
                    {errors.pass && touched.pass ? (<p className='validationMensage'>{errors.pass}</p>) : null}
                    <button type='submit'>Iniciar</button>
                </Form>
            )}
        </Formik>
    )
}

