import { useState } from "react";
import { useDispatch } from "react-redux";
import { Increment, Decrement, CustomIncrease } from "./Slice1";

export default function CustomIncreaser() {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  function handleNumber() {
    dispatch(CustomIncrease(Number(number)));
    setNumber("");
  }

  return (
    <div className="render-btn">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleNumber}>Submit</button>
    </div>
  );
}
