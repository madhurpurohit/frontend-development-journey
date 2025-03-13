import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./component/Store";
import Counting from "./component/Counting";
import CustomIncreaser from "./component/CustomIncreaser";

function App() {
  return (
    <Provider store={stores}>
      <div className="container">
        <Counting />
        <CustomIncreaser />
      </div>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
