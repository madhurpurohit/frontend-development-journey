import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CRUD from "./CRUD";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <CRUD />
  </StrictMode>
);
