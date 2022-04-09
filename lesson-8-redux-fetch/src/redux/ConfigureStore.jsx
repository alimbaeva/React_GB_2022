import { applyMiddleware, combineReducers, createStore } from 'redux';
import { postsReducer } from './reducer/reducer';
import thunk from 'redux-thunk';


export const rootReducer = combineReducers({
    posts: postsReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))