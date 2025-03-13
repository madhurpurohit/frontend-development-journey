import { useContext } from "react";
import GlobalContext from "./Global";

export default function SecondChild() {
  const { count, setCount } = useContext(GlobalContext);

  return (
    <>
      <h3>How are you all? Says: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
