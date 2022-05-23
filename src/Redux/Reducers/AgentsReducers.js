import { typesAgents } from "../Types/typesAgents";

const initialState = {
    Agents: []
}

export const AgentsReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesAgents.list:
            return {
                ...state,
                Agents: [...action.payload]
            }
        default:
            return state
    }
}