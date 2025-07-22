import { useState } from "react";

export const LiftingStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  console.log("Parent State Lift Up");

  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

function InputComponent({ inputValue, setInputValue }) {
  console.log("Child State Lift Up");

  return (
    <input
      type="text"
      placeholder="Enter Your Name"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

function DisplayComponent({ inputValue }) {
  console.log("Sibling State Lift Up");

  return <p> The Current input value is: {inputValue} </p>;
}
