import { useState } from "react";

export const StatesWorking = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  console.log("Parent Component");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increment</button>

      <ChildComponent count={count} />
    </>
  );
};

function ChildComponent({ count }) {
  console.log("Child Component");

  return <h2>Child Component- {count}</h2>;
}

export default function SiblingComponent() {
  console.log("Sibling Component");

  return <h2>Sibling Component</h2>;
}
