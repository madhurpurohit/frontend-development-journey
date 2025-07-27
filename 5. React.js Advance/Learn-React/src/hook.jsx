import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { ReactUseEffect } from "./Topics/Hooks/UseEffect/UseEffectHook";
// import { Challenge1 } from "./Topics/Hooks/UseEffect/Challenge1";
// import { CleanUp } from "./Topics/Hooks/UseEffect/CleanUp";
// import { WrongWayTOFetchApi } from "./Topics/Hooks/UseEffect/HowNotToFetchApi";
// import { RightWayToFetchApi } from "./Topics/Hooks/UseEffect/RightWayToFetchApi";
// import { UseRefHook } from "./Topics/Hooks/UseRef/UseRefHook";
// import { ForwardRefHook } from "./Topics/Hooks/ForwardRef/ForwardHook";
// import { UseIdHook } from "./Topics/Hooks/UseId/UseIdHook";
// import { PropDrillingParent } from "./Topics/Hooks/ContextApi/PropDrilling";
// import { ContextApi } from "./Topics/Hooks/ContextApi/ContextApiHook";
// import { ContextApiCustomHook } from "./Topics/Hooks/CustomHooks/ContextApiForCustom";
// import { UseReducerHook } from "./Topics/Hooks/UseReducer/UseReducerHook";
// import { ImproveUseReducerHook } from "./Topics/Hooks/UseReducer/ImproveReducerHook";
// import { ReactMemoHook } from "./Topics/Hooks/ReactMemo/ReactMemoHook";
// import UseMemoHook from "./Topics/Hooks/UseMemo/UseMemoHook";
// import { WhyWeUseMemo } from "./Topics/Hooks/UseMemo/WhyUseMemo";
import { UseCallbackHook } from "./Topics/Hooks/UseCallback/UseCallbackHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ReactUseEffect /> */}
    {/* <Challenge1 /> */}
    {/* <CleanUp /> */}
    {/* <WrongWayTOFetchApi /> */}
    {/* <RightWayToFetchApi /> */}
    {/* <UseRefHook /> */}
    {/* <ForwardRefHook /> */}
    {/* <UseIdHook /> */}
    {/* <PropDrillingParent /> */}
    {/* <ContextApi /> */}
    {/* <ContextApiCustomHook /> */}
    {/* <UseReducerHook /> */}
    {/* <ImproveUseReducerHook /> */}
    {/* <ReactMemoHook /> */}
    {/* <UseMemoHook /> */}
    {/* <WhyWeUseMemo /> */}
    <UseCallbackHook />
  </StrictMode>
);
