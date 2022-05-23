import { typesFavorites } from "../Types/typesFavorites"

export const actionAddFavoriteSync = (property) => {
    return{
        type: typesFavorites.add,
        payload: property
    }
}

export const actionListFavoriteAsync = (properties) => {
    return{
        type: typesFavorites.list,
        payload: properties
    }
}


export const actionDeleteFavoriteSync = () => {
    return{
        type: typesFavorites.delete
    }
}
