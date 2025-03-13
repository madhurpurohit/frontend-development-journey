import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState(null); // This will use because of useEffect.

  function createFibonacci(n) {
    if (n <= 1) return n;

    return createFibonacci(n - 1) + createFibonacci(n - 2);
  }

  //   const result = useMemo(()=>createFibonacci(number), [number]);

  useEffect(() => {
    setResult(createFibonacci(number)); // This will re-render extra one time than useMemo() Hook.
  }, [number]);

  return (
    <>
      <div className="container">
        <h1 className="heading">Counter is: {count}</h1>
        <div className="btn">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        <div className="render-btn">
          <label>Fibonacci Number is: {result}</label>
          <input type="number" onChange={(e) => setNumber(e.target.value)} />
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
