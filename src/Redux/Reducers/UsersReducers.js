import { TypesUsers } from "../Types/TypesUsers";

const initialState = {
    user: []
}

export const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case TypesUsers.login:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        case TypesUsers.list:
            return {
                user: [action.payload]
            }
        case TypesUsers.register:
            return {
                ...state, 
                user: [...state.user, action.payload]
            }
        case TypesUsers.logout:
            return {

            }
        default:
            return state
    }
}