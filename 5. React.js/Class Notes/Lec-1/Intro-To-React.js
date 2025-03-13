//* How to create element in React?
const element = React.createElement("h1", {}, "Hello Coder");

// ReactDOM.render(element, document.getElementById("root")); // In this React.render is deprecated after React17, So if we use React18 or lated version than we firstly make root & than render it.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// CDN Stands for Content Delivery Network.
