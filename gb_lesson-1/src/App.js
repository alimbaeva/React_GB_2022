import Message from "./component/Message";
import './app.scss'

function App() {
  let name = 'Asel';
  return (
    <div className="App">
      <Message text={name} />
    </div>
  );
}

export default App;
