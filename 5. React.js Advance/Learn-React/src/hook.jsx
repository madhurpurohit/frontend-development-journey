import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ReactUseEffect } from "./Topics/Hooks/UseEffect/UseEffectHook";
// import { Challenge1 } from "./Topics/Hooks/UseEffect/Challenge1";
// import { CleanUp } from "./Topics/Hooks/UseEffect/CleanUp";
// import { WrongWayTOFetchApi } from "./Topics/Hooks/UseEffect/HowNotToFetchApi";
// import { RightWayToFetchApi } from "./Topics/Hooks/UseEffect/RightWayToFetchApi";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ReactUseEffect /> */}
    {/* <Challenge1 /> */}
    {/* <CleanUp /> */}
    {/* <WrongWayTOFetchApi /> */}
    <RightWayToFetchApi />
  </StrictMode>
);
