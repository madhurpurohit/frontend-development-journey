import { useState } from "react";
// import { MemoCount } from "./MemoCount";
import MemoCount from "./MemoCount";

export const ReactMemoHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-lvh flex flex-col justify-center items-center text-3xl">
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <MemoCount />
    </div>
  );
};
