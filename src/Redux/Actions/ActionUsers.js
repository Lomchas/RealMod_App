import { TypesUsers } from "../Types/TypesUsers"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { facebook, google } from "../../Firebase/firebaseConfig"



// ----------- action login SYNC -----------//
export const actionLoginSync = (email, pass) => {
    return{
        type: TypesUsers.login,
        payload: {
            email,
            pass
        }
    }
}


// ------------- action Login ASYNC -----------//
export const actionEmailAndPass = (email, pass) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
            dispatch(actionLoginSync(email, pass))
            console.log(`${user.displayName} Bienvenido`)
        })
        .catch(error => window.alert(`${error} Usuario No encontrado`))
    }
}


// ------------ action Register SYNC ----------//
export const actionRegisterSync = (nombre, email, pass) => {
    return{
        type: TypesUsers.register,
        payload: {
            nombre,
            email,
            pass
        }
    }
}

// ------------ action Register ASYNC ----------//
export const actionRegisterAsync = (nombre, email, pass) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user}) => {
            await updateProfile(auth.currentUser, {displayName: nombre, photoURL: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146'})
            dispatch(actionRegisterSync(nombre, email, pass))
        })
        .catch(err => console.log(`${err} usuario no autorizado`) )
    }
}


// ----------- action google -----------//
export const actionGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(({user}) => {
            dispatch(actionLoginSync(user.email, user.password))
            console.log(`${user.displayName} Bienvenido!`)
        })
        .catch(error => console.log(`${error} - Usuario no autorizado`))
    }
}


// --------- action facebook -------------//
export const actionFacebook = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
        .then(({user}) => {
            dispatch(actionLoginSync(user.email, user.password))
            console.log(`Bienvenido...! - ${user.displayName}`)
        })
        .catch(error => console.log(`${error} -- Usuario no Autorizado`))
    }
}