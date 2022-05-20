import { TypesUsers } from "../Types/TypesUsers";

const initialState = {

}

export const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case TypesUsers.login:
            return {

            }
        case TypesUsers.register:
            return {

            }
        case TypesUsers.logout:
            return {

            }
        default:
            return state
    }
}