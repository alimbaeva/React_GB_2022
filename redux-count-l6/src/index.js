import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'plus':
      return state + 1;

    case "minus":
      return state - 1;
    default:
      return state
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
