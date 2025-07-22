import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Component from "./Topics/Component";
// import Fragment1 from "./Topics/Fragment";
// import MyComponent from "./Topics/DynamicValue";
// import ConditionalRender from "./Topics/ConditionalRendering";
// import { Interview1 } from "./Topics/Interview1";
// import ImportExportApp from "./ImportExportApp";
// import App from "./App";
// import EventApp from "./EventApp";
import StatesApp from "./StatesApp";
import ProjectApp from "./ProjectApp";
import { Keys } from "./Topics/Keys";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Component/> */}
    {/* <Fragment1/> */}
    {/* <MyComponent/> */}
    {/* <ConditionalRender /> */}
    {/* <Interview1/> */}
    {/* <ImportExportApp /> */}
    {/* <App /> */}
    {/* <EventApp /> */}
    <StatesApp />
    {/* <ProjectApp /> */}
    {/* <Keys /> */}
  </StrictMode>
);
