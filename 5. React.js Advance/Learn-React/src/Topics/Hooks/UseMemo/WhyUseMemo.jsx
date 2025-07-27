//* In this
import { useMemo, useState } from "react";
import SupportWhy from "./SupportWhy";

export const WhyWeUseMemo = () => {
  const [count, setCount] = useState(0);

  //* Because of the below object even we use memo hook in SupportWhy component, when WhyWeUseMemo will rendered than also SupportWhy is rendered. Because Object,Array, Non-primitive Data types are passing as a reference but Primitive data types are passing as pass by value. So whenever the WhyWeUseMemo will render than bioData Object will get a new location & the memo hook says that when a prop is changed than it will re-render. & the React.Memo() or memo hook checks the props via reference for non-primitive data type & for primitive data type it checks via value.
  //   const bioData = {
  //     name: "DevFlux",
  //     age: 24,
  //   };

  //* So to avoid those re-render because of props we always use useMemo() Hook, because it will cached the return result/value means the props which is passing to Child than child saw that it's same even if the parent is re-render.
  const bioData = useMemo(() => {
    return { name: "DevFlux", age: 24 };
  }, []);

  return (
    <div className="h-lvh flex flex-col justify-center items-center text-3xl">
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <SupportWhy bioData={bioData} />
    </div>
  );
};
