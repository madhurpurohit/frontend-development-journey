import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Element from "./component/Element";

function App() {
  const [language, setLanguage] = useState(["JS", "Java", "C++"]);

  function handleClick() {
    setLanguage(["Python", ...language]);
  }

  console.log("Body Rendering...");

  return (
    <>
      <div className="container">
        {language.map((value, index) => (
          <Element value={value} />
        ))}
      </div>

      <button className="btn" onClick={handleClick}>
        Add Language
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
