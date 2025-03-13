//* If we have more elements than we have two methods, one is to create all the element one by one, or we can use object.
// Method-1.
// const header1 = document.createElement("h1");
// header1.innerText = "Hello, Coders.";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// document.getElementById("root").append(header1);
// & so on.

const React = {
  createElement: function (tag, styles, children) {
    // To create an element.
    const element = document.createElement(tag);

    // To add styles.
    for (let key in styles) {
      element.style[key] = styles[key];
    }

    // If we send array in children.
    if (typeof children === "object") {
      for (let value of children) {
        element.append(value);
      }
    }
    // To add innerText.
    else element.innerText = children;

    // We must return this element.
    return element;
  },
};

const header1 = React.createElement(
  "h1",
  {
    backgroundColor: "blue",
    color: "white",
    fontSize: "30px",
  },
  "Hello Coders"
);

// document.getElementById("root").append(header1);

//? When we change in HTML file using DOM than it is known as DOM Manipulation & the process is known as render.
const ReactDOM = {
  render: function (element, parent) {
    parent.append(element);
  },
};

const root = document.getElementById("root");
ReactDOM.render(header1, root);

//! React & ReactDOM is object.
//todo How to add Unordered List using React & ReactDOM Object?
const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JS");

const ul = React.createElement(
  "ul",
  {
    fontSize: "30px",
    backgroundColor: "green",
    color: "white",
  },
  [li1, li2, li3]
);

ReactDOM.render(ul, root);
