import { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);

  return <button onClick={onClick}>{children}</button>;
});

export const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Inside Increment");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("Inside Decrement");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <>
      <div className="h-lvh flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold">{count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </>
  );
};
