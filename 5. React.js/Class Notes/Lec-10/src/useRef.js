import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  let money = useRef(0);

  return (
    <>
      <div className="container">
        <h1 className="heading">Counter is: {count}</h1>
        <div className="btn">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        <h2 className="heading">Money is: {money.current}</h2>
        <div className="btn">
          <button
            onClick={() => {
              money.current += 1;
              console.log(money.current);
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              money.current -= 1;
              console.log(money.current);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
