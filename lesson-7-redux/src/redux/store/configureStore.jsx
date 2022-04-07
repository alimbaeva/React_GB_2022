import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CountReduser } from './reducer/CountReduser';
import { loggerMiddleware } from './reducer/CountReduser'

export const rootReducer = combineReducers({
    count: CountReduser
});


export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))