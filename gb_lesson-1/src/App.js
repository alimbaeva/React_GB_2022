import { useEffect } from "react";
import Message from "./component/Message";
import Forma from "./component/Forma";
import './app.scss'

function App() {
  let name = 'Asel';

  const arr = () => {
    return [
      'Привет', 'Привет', 'Привет'
    ]
  }

  return (
    <div className="App">
      <Message text={name} arr={arr} />
      <Forma />
    </div>
  );
}

export default App;
