import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addSushi = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="sushi-background"></div>
      <h1 className="title">Sushi Tæller</h1>
      <p className="count">Sushi: {count}</p>
      <button className="add-button" onClick={addSushi}>
        Tilføj en
      </button>
    </div>
  );
}

export default App;
