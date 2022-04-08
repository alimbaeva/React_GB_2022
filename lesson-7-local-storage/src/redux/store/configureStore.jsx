import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CountReduser } from './reducer/CountReduser';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

export const rootReducer = combineReducers({
    count: CountReduser
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);