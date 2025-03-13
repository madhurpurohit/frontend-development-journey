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

/* In this if we want to create a complex HTML structure like.
    <div>
        <div>
            <h1>
                <p></p>
            </h1>
        </div>
    </div>

    Than we use the above method but this is so lengthy & code were not readable, & messy.
    So what if that we get the power so that we write this type of complex project just like HTML, That is possible using JSX, but JSX is not the part of react, instead it is inherit from elsewhere.
*/
