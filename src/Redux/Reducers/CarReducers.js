import { typesCar } from "../Types/typesCar";

const initialState = {
    Car: []
}

export const CarReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesCar.list:
            return {
                ...state,
                Car: [...state.Car, action.payload]
            }
        case typesCar.add:
            return {
                ...state,
                Car: [...state.Car, action.payload]
            }
        case typesCar.delete:
            return {
                Car: state.Car.filter((property) => property.property_title !== action.payload)
            }
        default:
            return state
    }
}