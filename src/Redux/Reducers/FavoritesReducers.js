import { typesFavorites } from "../Types/typesFavorites";

const initialState = {
    Favorites: []
}

export const FavoritesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesFavorites.add:
            return {
                ...state,
                Favorites: [...state.Favorites, action.payload]
            }
        case typesFavorites.delete:
            return {
                Favorites: state.Favorites.filter(property => property.property_title !== action.payload)
            }
        case typesFavorites.list:
            return {
                ...state
            }
        default:
            return state
    }
}