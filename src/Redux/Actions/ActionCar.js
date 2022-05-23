import { typesCar } from "../Types/typesCar"

export const addCarSync = (PropertyCar) => {
    return{
        type: typesCar.add,
        payload: PropertyCar
    }
}

export const listCarSync = (car) => {
    return{
        type: typesCar.list,
        payload: car
    }
}

export const deleteCarSync = (titleCard) => {
    return{
        type: typesCar.delete,
        payload: titleCard
    }
}
