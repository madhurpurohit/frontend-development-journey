//* To use useState we firstly import it. & this export normally, so we import it inside {}.
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  let [count, setCount] = useState(0);

  function incrementNumber() {
    count++;
    // setCount(count);
    setCount(count++);
  }

  function decrementNumber() {
    if (count > 0) {
      count--;
      setCount(count);
    }
  }

  return (
    <div className="container">
      <h1>Count is: {count}</h1>
      <button onClick={incrementNumber} className="btn" id="btn-1">
        Increment {count}
      </button>
      <button onClick={decrementNumber} className="btn" id="btn-2">
        Decrement {count}
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
