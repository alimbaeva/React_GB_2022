import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector(state => {
    return state
  });

  const dispatch = useDispatch();

  const increate = () => {
    dispatch({ type: 'plus' })
  }
  const descreate = () => {
    dispatch({ type: 'minus' })
  }

  return (
    <div className="count">
      <div className="num">
        {count}
      </div>
      <button onClick={() => increate()}>Увеличить счетчик</button>
      <button onClick={() => descreate()}>Уменьшить счетчик</button>
      {/* <button onClick={() => dispatch({ type: 'plus' })}>Увеличить счетчик</button>
      <button onClick={() => dispatch({ type: 'minus' })}>Уменьшить счетчик</button> */}
    </div>
  );
}

export default App;
