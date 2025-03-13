import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./component/Colorful";

//* useState means re-render the function, re-render means call the function(). Here we use primitive data type in useState as an parameter, so when we don't change the value means value remains same, still it will work once. But when we re-render another time than it will not work, because the value is same. It is known as bailout method.

//* So to prevent the above problem we use useEffect() Hook.
/*  Syntax:- useEffect(()=>{
             }, [dependency])

    ! If we don't give [dependency] than it will work every time without checking that value has been changed or not. means code is:- useEffect(()=>{}).
    ! & if we leave empty dependency than it will work only once, after that it will not work. in this code is:- useEffect(()=>{},[]).
*/

//* When we click on (button id="btn-1") it will update the count value & re-render the BgChange() function, & because of this the Colorful function also re-render, so to stop it re-render, because when we change the count value than our color value doesn't change or useEffect isn't work, so why we re-render it, that's why we use React.memo() hook. & it is used when we export the Colorful function.
//! Syntax:- React.memo(function).

function BgChanger() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 id="main-heading">Count is: {count}</h1>
        <button
          id="btn-1"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
      <Colorful name={count}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BgChanger />);
