import { createStore } from 'redux';
import { productsReducer } from './reducer/productsReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(productsReducer, composeWithDevTools())