
import Message from "./component/Message";
import Forma from "./component/Forma";
import UiForm from "./component/UiForm";
import './app.scss'

function App() {
  let name = 'Myne';

  const arr = () => {
    return [
      'Привет', 'Привет', 'Привет'
    ]
  }

  return (
    <div className="App">
      <Message text={name} arr={arr} />
      <Forma />
      <UiForm />
    </div>
  );
}

export default App;
