import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function APP() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let runTimer = useRef(null);

  function startWatch() {
    if (!isRunning) {
      runTimer.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        setIsRunning(true);
      }, 1000);
    }
  }

  function stopWatch() {
    clearInterval(runTimer.current);
    setIsRunning(false);
  }

  function resetWatch() {
    setTime(0);
    setIsRunning(false);
    clearInterval(runTimer.current);
  }

  return (
    <>
      <div className="container">
        <h1 className="heading">StopWatch is: {time}</h1>
        <div className="btn">
          <button onClick={startWatch}>Start</button>
          <button onClick={stopWatch}>Stop</button>
          <button onClick={resetWatch}>Reset</button>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<APP />);
