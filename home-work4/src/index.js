import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  contacts: [
    {
      name: 'Andrey'
    },
    {
      name: 'Yula'
    },
    {
      name: 'Venera'
    },
    {
      name: 'Gulya'
    }
  ],

  isActive: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case action.isActive:
      console.log(action.isActive)
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
