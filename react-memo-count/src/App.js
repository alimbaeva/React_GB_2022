import React, { useState, useEffect } from "react";
import Count from "./components/Count";
import IsFive from "./components/IsFive";


function App() {
  const [theme, setTheme] = useState(0);
  // useEffect(()={

  // })
  return (
    <div className="App">
      <Count />
      <IsFive />
    </div>
  );
}

export default App;
