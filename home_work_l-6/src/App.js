import { useDispatch, useSelector } from "react-redux";
import { ChatSelector } from './redux/store/reducers/ChatSelector/Selector'

function App() {
  const chats = useSelector(ChatSelector);
  const dispatch = useDispatch();
  const add = (name) => {
    const obj = {
      name: name
    }
    dispatch({ type: 'add', payload: obj })
  }
  return (
    <div className="App">
      {
        chats.map((chat) => (
          <li>
            {chat.name}
            <button onClick={() => dispatch({ type: 'delete', payload: chat.id })}>X</button>
          </li>
        ))
      }
      <button onClick={() => add(prompt())}> ADD</button>
    </div>
  );
}

export default App;
