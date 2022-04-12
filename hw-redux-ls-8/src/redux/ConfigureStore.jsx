import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { PostReducer } from "./reducer/PostReducer";

const reducer = combineReducers({
    posts: PostReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))