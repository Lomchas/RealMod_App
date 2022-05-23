import { typesAgents } from "../Types/typesAgents"

export const actionListAgentsSync = (Agents) => {
    return {
        type: typesAgents.list,
        payload: Agents
    }
}


export const actionListAgentsAsync = () => {
    return async(dispatch) => {
        const res = await fetch('https://realmodapp.herokuapp.com/AgentsApp') 
        const data = await res.json()
        dispatch(actionListAgentsSync(data))
    }
}