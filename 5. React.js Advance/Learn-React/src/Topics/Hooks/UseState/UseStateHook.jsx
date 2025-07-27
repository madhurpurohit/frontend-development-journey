// To use useState hook firstly we have to import that hook from react.
import { useState } from "react";

export const UseStateHook = () => {
  //   let value = 0;

  //   function handleButtonClick() {
  //     value++;
  //     console.log(value);
  //   }

  //   let array = useState();
  //   console.log(array);

  //* When we use useState then it will provide an array of two element where the first element is state variable & the second element is updater function. That's why we always destructure this array form, when we use useState, just like below code line.
  const [count, setCount] = useState(0);

  const handleIncrementButtonClick = () => {
    setCount(() => count + 1);
  };

  const handleDecrementButtonClick = () => {
    setCount(() => count - 1);
  };

  const handleResetButtonClick = () => {
    setCount(0);
  };

  return (
    <div className="full-container">
      <h1>useState() Hook</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrementButtonClick}>Increment</button>
      <button onClick={handleDecrementButtonClick}>Decrement</button>
      <button onClick={handleResetButtonClick}>Reset</button>
    </div>
  );
};
