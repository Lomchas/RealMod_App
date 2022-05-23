import { TypesUsers } from "../Types/TypesUsers"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { facebook, google } from "../../Firebase/firebaseConfig"


const actionLogoutSync = () => {
    return {
        type: TypesUsers,
    }
}

export const actionLogoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
        .then((user) => {
            dispatch(actionLogoutSync())
            console.log('Cerraste Sesion...')
        })
        .catch(err => console.log(err))
    }
}


// ----------- action login SYNC -----------//
const actionLoginSync = (name, image, email, pass) => {
    return{
        type: TypesUsers.login,
        payload: {
            name,
            image,
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
            dispatch(actionLoginSync( user.displayName, user.photoURL, email, pass))
            console.log(`${user.displayName} Bienvenido`)
        })
        .catch(error => window.alert(`${error} Usuario No encontrado`))
    }
}


// ------------ action Register SYNC ----------//
export const actionRegisterSync = (nombre, image, email, pass) => {
    return{
        type: TypesUsers.register,
        payload: {
            nombre,
            image,
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
            dispatch(actionRegisterSync(nombre, user.photoURL, email, pass))
        })
        .catch(err => console.log(`${err} usuario no autorizado`) )
    }
}


// ----------- action google -----------//
export const actionGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(async({user}) => {
            dispatch(actionLoginSync(user.displayName, user.photoURL, user.email, user.password))
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
            dispatch(actionLoginSync(user.displayName, user.photoURL, user.email, user.password))
            console.log(`Bienvenido...! - ${user.displayName}`)
        })
        .catch(error => console.log(`${error} -- Usuario no Autorizado`))
    }
}