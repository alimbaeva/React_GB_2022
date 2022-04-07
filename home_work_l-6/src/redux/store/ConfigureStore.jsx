import { combineReducers, createStore } from 'redux';
import { ChatReducer } from './reducers/ChatReducers';
import { MessageReducer } from './reducers/MessageReducer';

export const rootReducer = combineReducers({
    chats: ChatReducer,
    messages: MessageReducer
});

// const message = state => state.ChatReducer.chats
// const message = state => state.chats.chats


export const store = createStore(rootReducer)