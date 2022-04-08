import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CountReduser } from './reducer/CountReduser';
import { loggerMiddleware } from './reducer/CountReduser'

export const rootReducer = combineReducers({
    count: CountReduser
});

const thunkMiddleware = store => next => action => {
    typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)
}
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))