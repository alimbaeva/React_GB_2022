import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CountReduser } from './reducer/CountReduser';
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
    count: CountReduser
});

// const thunk = store => next => action => {
//     if (typeof action === 'function') {
//         return action(store.dispatch, store.getState())
//     }
//     return next(action)
// }
export const store = createStore(rootReducer, applyMiddleware(thunk))