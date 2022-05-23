import { typesProperties } from "../Types/typesProperties"
import { addDoc, collection } from 'firebase/firestore'
import { collectionFirebase } from "../../Firebase/firebaseConfig"


export const actionAddSync = (Property) => {
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
            //dispatch(actionListAsync)
        })
        .catch(err => console.log(err))
    }
} 