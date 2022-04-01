import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from './context';

function Main() {
  const [theme, setTheme] = useState('light');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
