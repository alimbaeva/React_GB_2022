import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "./redux/store/reducer/action";
import { CountSelector } from './redux/store/reducer/count/CountSelector'

function App() {
  const counter = useSelector(CountSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDate())
  }, [])

  return (
    <div className="App">
      {
        <div>
          {counter}
        </div>
      }
      <button onClick={() => dispatch({ type: 'plus' })}> Увеличить</button>
      <button onClick={() => dispatch({ type: 'minus' })}> Уменьшить</button >
    </div >
  );
}

export default App;
