import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { AgentsReducers } from '../Reducers/AgentsReducers';
import { CarReducers } from '../Reducers/CarReducers';
import { FavoritesReducers } from '../Reducers/FavoritesReducers';
import { PropertiesReducer } from '../Reducers/PropertiesReducer';
import { UserReducers } from '../Reducers/UsersReducers';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    users: UserReducers,
    Properties: PropertiesReducer,
    Agents: AgentsReducers,
    Car: CarReducers,
    Favorites: FavoritesReducers
})

export const Store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)