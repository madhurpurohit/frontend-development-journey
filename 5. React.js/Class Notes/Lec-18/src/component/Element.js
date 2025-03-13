import { useState } from "react";

export default function Element(value) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="element">
        <h2>
          {value.value} : {count}
        </h2>
        <button onClick={() => setCount(count + 1)}>Vote</button>
      </div>
    </>
  );
}
