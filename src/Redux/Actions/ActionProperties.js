import { typesProperties } from "../Types/typesProperties"
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { collectionFirebase } from "../../Firebase/firebaseConfig"


const actionAddSync = (Property) => {
    return{
        type: typesProperties.add,
        payload: Property
    }
}


export const actionAddAsync = (Property) => {
    // console.log(Property)
    return (dispatch) => {
        addDoc(collection(collectionFirebase, 'RealMod-Properties'), Property)
        .then((res) => {
            dispatch(actionAddSync(Property))
            dispatch(actionListAsync())
        })
        .catch(err => console.log(err))
    }
} 


const actionListSync = (Properties) => {
    return{
        type: typesProperties.list,
        payload: Properties
    }
}

export const actionListAsync = () => {
    return async(dispatch) => {
        const data = await getDocs(collection(collectionFirebase, 'RealMod-Properties'))
        const properties = [];
        data.forEach((doc) => {
            properties.push({
                ...doc.data()
            })    
        })
        console.log(properties)
        dispatch(actionListSync(properties))
    }
}
