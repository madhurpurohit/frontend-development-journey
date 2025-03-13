import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import FirstChild from "./First-Child";
import GlobalContext from "./Global";
import Third from "./Third";

function App() {
  const [count, setCount] = useState(0);
  const data = useContext(GlobalContext); // It is known as consume the context.

  return (
    <>
      <h1>I am {data}.</h1>
      <Third />
      <GlobalContext.Provider value={{ count, setCount }}>
        {" "}
        {/* In this key & value have same name that's ehy we give it ones. so it will consume like count:count, setCount:setCount. */}
        <div className="container">
          <h1 className="heading">Parent Count is: {count}</h1>
          <FirstChild />
        </div>
      </GlobalContext.Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
