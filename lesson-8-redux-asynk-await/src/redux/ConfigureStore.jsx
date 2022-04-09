import { applyMiddleware, combineReducers, createStore } from 'redux';
import { usersReducer } from './reducer/reducer';
import thunk from 'redux-thunk';


export const rootReducer = combineReducers({
    users: usersReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))