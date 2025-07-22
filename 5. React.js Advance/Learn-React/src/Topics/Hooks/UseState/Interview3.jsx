//* useState Challenge Description:
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

import { useState } from "react";

//? Reset Button: Add a button to reset the count to zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step Increment: Add an input field to allow users to set the step value by which the counter should increment or decrement.

export const Interview3 = () => {
  const [count, setCount] = useState(0);
  const [jump, setJump] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleIncrementButtonClick = () => {
    setCount(() => {
      if (count + jump >= 100) return 100;

      return count + jump;
    });
  };

  const handleDecrementButtonClick = () => {
    setCount(() => {
      if (count - jump <= 0) return 0;

      return count - jump;
    });
  };

  const handleResetButtonClick = () => {
    setCount(0);
  };

  return (
    <>
      <div className="box-container">
        <h1>useState Challenge</h1>
        <div className="inner-box">
          <p>
            Count: <span className="count-variable">{count ?? 0}</span>
          </p>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            Step:
            <input
              type="text"
              className="input-elem"
              value={jump}
              onChange={(e) => setJump(Number(e.target.value))}
            />
          </form>
        </div>
        <div className="btn-box">
          <button onClick={handleIncrementButtonClick} disabled={count >= 100}>
            Increment
          </button>
          <button onClick={handleDecrementButtonClick} disabled={count <= 0}>
            Decrement
          </button>
          <button onClick={handleResetButtonClick}>Reset</button>
        </div>
      </div>
    </>
  );
};
