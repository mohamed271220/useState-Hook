import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  console.log(setNumber);
  console.log(number);

  return (
    <div className="container">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
}

export default App;
