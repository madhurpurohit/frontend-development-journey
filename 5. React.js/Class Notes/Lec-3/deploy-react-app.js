//* How to run react code using node_module instead of using CDN links?
import React from "react"; // This means import React from react folder/file.
// import ReactDOM from "react-dom"; // This is old react-dom, & we don't use it now.
import ReactDOM from "react-dom/client"; // This is for latest react-dom. & it is presented inside client.

/*
const element1 = React.createElement(
  "h1",
  {
    id: "first",
    className: "header",
    style: { backgroundColor: "red", fontSize: "30px", color: "white" },
  },
  "Hello Coders"
);

const element2 = React.createElement(
  "h2",
  {
    id: "second",
    className: "header",
    style: { backgroundColor: "black", fontSize: "30px", color: "white" },
  },
  "Hii, Are you there?"
);

const ReactDiv = React.createElement("div", { id: "second-root" }, [
  element1,
  element2,
]);

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));

ReactRoot.render(ReactDiv);
*/

//* JSX Definition: A syntax extension for JavaScript that looks similar to HTML.

//* How JSX works?
//! ---------> Babel ------------------> React -------------------> Render
//? JSX ==> React.createElement() ==> react Element/JS Object ==> HTML Element

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));

const element3 = <h1>Hello Coders, I am JSX</h1>;

// ReactRoot.render(element3);

//* How to create multiple element.

//? Method1:- We wrap all the element in one tag like div etc. In this h1 & h2 are present inside div & this div is render inside ReactRoot.
const element4 = (
  <div>
    <h1> Hello Coders, How are you all?</h1>
    <h2>We all are fine.</h2>
    <p>We are here to learn JSX in-depth, So are you excited?</p>
  </div>
);

ReactRoot.render(element4);

//? Method-2:- We can wrap all this inside empty element, so the h1 & h2 are directly render inside ReactRoot element.
const element5 = (
  <>
    <h1>We all have exciting journey ahead.</h1>
    <h2>Yes we have.</h2>
  </>
);

ReactRoot.render(element5); // It will replace the element4 because of render.

//* How to add attribute in JSX?
//? We can aso add JS expressions.
const names = "Madhur Purohit";
const obj = {
  age: 23,
  salary: 60000,
};

const element6 = (
  <>
    <h1 id="First" className="header">
      We all have exciting journey ahead. Says: {names}, Salary: {obj.salary}
    </h1>
    <h2>Yes we have {obj.age}.</h2>
  </>
);

ReactRoot.render(element6);

//* How to make our own attribute & pass number as value?
//? To pass number in attribute we use {} instead of "".
const element7 = (
  <>
    <h1 id="First" className="header">
      We all have exciting journey ahead. Says: {names}, Salary: {obj.salary}
    </h1>
    <h2 money={25}>Yes we have {obj.age}.</h2>
  </>
);

ReactRoot.render(element7);

//* How to give style attribute?
// In style attribute it always want an JS expression as an object.

//? Method1:- create an object an pass it to style attribute.
const styleObj = {
  backgroundColor: "green",
  color: "white",
  fontSize: "20px",
};

const element9 = (
  <>
    <h1 id="First" className="header">
      We all have exciting journey ahead. Says: {names}, Salary: {obj.salary}
    </h1>
    <h2 style={styleObj}>Yes we have {obj.age}.</h2>
  </>
);

ReactRoot.render(element9);

//? Method2:- Directly write properties inside style attribute as an object.
const element10 = (
  <>
    <h1 id="First" className="header">
      We all have exciting journey ahead. Says: {names}, Salary: {obj.salary}
    </h1>
    <h2 style={{ backgroundColor: "cyan", color: "black", fontSize: "20px" }}>
      Yes we have {obj.age}.
    </h2>
  </>
);

ReactRoot.render(element10);

//* React Component:- There are two type of component. 1) Class Based Component, 2) Function Based Component.
// Class based component is very old method & now we don't use it.
// Function based component means how we can write function in react.

function greet() {
  return <h1>Hello Ji, Where are you?</h1>;
}

const element11 = greet();
ReactRoot.render(element11);

const meet = () => {
  return <h2>I am from India.</h2>;
};

const element12 = meet();
ReactRoot.render(element12);

//* How to display multiple functions?
//? Method1:-
ReactRoot.render(
  <>
    {greet()} {meet()}
  </>
);

//? Method2:-
// We can also use {greet()} instead of {element11}. also we use {meet()} instead of {element12}.
const multipleFunction = (
  <>
    {element11}
    {element12}
  </>
);

ReactRoot.render(multipleFunction);
