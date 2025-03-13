import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1 className="heading">Parent Count is: {count}</h1>
        <div className="btn">
          <Increment counts={count} setCounts={setCount} />
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
