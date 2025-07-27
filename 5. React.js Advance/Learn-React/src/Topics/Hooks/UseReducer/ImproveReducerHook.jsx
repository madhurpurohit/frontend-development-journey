import { useReducer } from "react";

export const ImproveUseReducerHook = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        // return { ...state, count: state.count + 1 }; // If we want to increment with 1
        return { ...state, count: state.count + state.inc }; // If we want to increment based on inc which is present inside initialState.

      case "DECREMENT":
        // return { ...state, count: state.count - 1 }; // If we want to decrement with 1
        return { ...state, count: state.count - state.dec }; // If we want to increment based on dec which is present inside initialState.

      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 h-lvh flex flex-col justify-center items-center">
      <h1 className="text-7xl">{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};
