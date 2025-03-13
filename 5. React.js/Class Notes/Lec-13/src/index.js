import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Github from "./component/Github";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* To create dynamic route we use Param */}
        <Route path="/Github/:name" element={<Github />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
