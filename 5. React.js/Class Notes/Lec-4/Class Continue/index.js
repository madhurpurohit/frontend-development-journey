import React from "react";
import ReactDOM from "react-dom/client";

//* Inside JSX we can write JS Expression but we can't write the JS Statement.
//? Expressions:- It means give some output or result, & this can be array, string, number.
//? Statement:- This means which is not give any output or result.

//* How we call function as an JSX format?
// To call function as an JSX format, the functionName first letter must be in capital, otherwise it won't work. It is JSX rule not react rule.

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));

function Greet() {
  return <h1>Hello Coders.</h1>;
}

const element = <Greet />;
ReactRoot.render(element);

//* How to pass argument in function as an JSX format?

// In JSX function can take all arguments inside props and it is act as an object.
function Print(props) {
  return (
    <h1>
      I am {props.name}, & I am {props.age} year old.
    </h1>
  );
}

const element1 = <Print name="Madhur Purohit" age="24" />;
ReactRoot.render(element1);
