import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import CreateBrowserRouter from "./CreateBrowserRouter";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CreateBrowserRouter /> */}
    <App />
  </StrictMode>
);
