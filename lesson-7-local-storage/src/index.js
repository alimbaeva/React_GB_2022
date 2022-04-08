import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore'
import { persistor } from './redux/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />

      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
