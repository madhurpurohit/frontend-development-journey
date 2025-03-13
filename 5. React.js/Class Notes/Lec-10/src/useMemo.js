import React, { useState, useMemo, useCallback } from "react";
import ReactDOM from "react-dom/client";

//* To prevent unnecessary memory consumption we can write the function outside the render function which is App, or we can use useCallback() function.
// function createFibonacci(n) {
//   if (n <= 1) return n;

//   return createFibonacci(n - 1) + createFibonacci(n - 2);
// }

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");

  //* the below function are getting memory for every render.
  // function createFibonacci(n) {
  //   if (n <= 1) return n;

  //   return createFibonacci(n - 1) + createFibonacci(n - 2);
  // }

  const createFibonacci = useCallback((n) => {
    if (n <= 1) return n;

    return createFibonacci(n - 1) + createFibonacci(n - 2);
  }, []);

  const result = useMemo(() => createFibonacci(number), [number]);

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
