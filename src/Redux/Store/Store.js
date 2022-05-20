import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { UserReducers } from '../Reducers/UsersReducers';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    users: UserReducers
})

export const Store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)