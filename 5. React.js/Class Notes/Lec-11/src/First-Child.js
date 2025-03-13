import { useContext } from "react";
import GlobalContext from "./Global";
import SecondChild from "./Second-Child";

export default function FirstChild() {
  //   const data = useContext(GlobalContext);
  const { count, setCount } = useContext(GlobalContext);

  return (
    <>
      <h2>Hello, I am {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <SecondChild />
    </>
  );
}
