import { typesProperties } from "../Types/typesProperties";

const initialState = {
    Properties: []
}

export const PropertiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProperties.add:
            return{
                ...state,
                Properties: [...state.Properties, action.payload]
            }
        case typesProperties.edit:
            return{
                ...state
            }
        case typesProperties.list:
            return{
                ...state,
                Properties: [...action.payload]
            }
        case typesProperties.delete:
            return{
                
            }
        default:
            return state
    }
}