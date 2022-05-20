import { TypesUsers } from "../Types/TypesUsers"


export const actionLoginSync = (email, pass) => {
    return{
        type: TypesUsers.login,
        payload: {
            email,
            pass
        }
    }
}