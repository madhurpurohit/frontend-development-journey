import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Element from "./component/Element";

function App() {
  const [language, setLanguage] = useState(["JS", "Java", "C++"]);

  function handleClick() {
    setLanguage(["Python", ...language]);
  }

  function sortClick() {
    language.sort();
    setLanguage([...language]);
  }

  //* How to prove Virtual DOM is lightweight, but Real DOM is Heavier.

  const VDom = <h1>Hello Coders</h1>;

  const RDom = document.createElement("h1");
  RDom.innerText = "Hello Coders";

  console.log(VDom);
  console.dir(RDom); // Here dir gives us the directory of the RDom. Which is in the object format, & it is like VDom.

  return (
    <>
      <div className="container">
        {language.map((value, index) => (
          //   <Element key={index} value={value} />
          <Element key={value} value={value} />
        ))}
      </div>

      <button className="btn" onClick={handleClick}>
        Add Language
      </button>
      <button className="btn" onClick={sortClick}>
        Sort Values
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
