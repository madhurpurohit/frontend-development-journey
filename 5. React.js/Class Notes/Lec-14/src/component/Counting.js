import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reset } from "./Slice1";

export default function Counting() {
  const count = useSelector((state) => state.slice1.count);
  const dispatch = useDispatch();

  //   console.log(Increment());

  return (
    <>
      <div className="container">
        <h1>Counting is {count}</h1>
        <div className="render-btn">
          <button onClick={() => dispatch(Increment())}>Increment</button>
          <button onClick={() => dispatch(Decrement())}>Decrement</button>
          <button onClick={() => dispatch(Reset())}>Reset</button>
        </div>
      </div>
    </>
  );
}
