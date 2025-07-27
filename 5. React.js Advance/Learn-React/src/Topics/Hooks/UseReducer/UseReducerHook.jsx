import { useReducer } from "react";

//* useReducer Hook is an alternative of useState hook, so if we work on small projects than we can use useState hook, but if we work on Big project than we use useReducer hook.
export const UseReducerHook = () => {
  const reducer = (state, action) => {
    console.log(action);

    if (action.type === "INCREMENT") return state + 1;

    if (action.type === "DECREMENT") return state - 1;
  };

  const [count, dispatch] = useReducer(reducer, 0);
  console.log(useReducer());

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1 className="text-7xl">{count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};
