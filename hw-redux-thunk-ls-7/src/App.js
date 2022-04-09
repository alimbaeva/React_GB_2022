import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countSelector } from './redux/reducer/countSelector/Selector';
import { getCount } from './redux/reducer/Action'


function App() {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  const increase = () => {
    return { type: 'plus' }
  }

  useEffect(() => {
    dispatch(getCount())
  }, [])
  return (
    <div className="App">
      {count}
      {/* <button>Увеличить</button>
      <button>Уменьшить</button> */}
      <h1></h1>
    </div>
  );
}

export default App;
