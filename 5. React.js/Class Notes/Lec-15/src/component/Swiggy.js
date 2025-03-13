import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./Header";
import Card from "./Card";
import foodStore from "./FoodStores";

function App() {
  return (
    <Provider store={foodStore}>
      <Header />
      <Card />
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
