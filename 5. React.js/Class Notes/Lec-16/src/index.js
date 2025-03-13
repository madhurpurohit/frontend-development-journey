import React from "react";
import ReactDOM from "react-dom/client";
import { FetchData } from "./component/slicer1";
import { Provider } from "react-redux";
import stores from "./component/store";
import CoinCreate from "./component/CoinCreate";

function App() {
  return (
    <Provider store={stores}>
      <h1>Bitcoins Data</h1>
      <CoinCreate />
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
