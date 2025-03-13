import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./component/Store";
import Counting from "./component/Counting";

function App() {
  return (
    <Provider store={stores}>
      <Counting />
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
