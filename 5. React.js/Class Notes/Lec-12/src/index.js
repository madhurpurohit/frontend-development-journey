import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import Details from "./component/Details";
import Contact from "./component/Contact";
import Zero from "./component/Zero";
import Hello from "./component/Hello";
import Hi from "./component/Hi";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Details" element={<Details></Details>}>
          <Route index element={<Zero></Zero>}></Route>
          <Route path="Hello" element={<Hello></Hello>}></Route>
          <Route path="Hi" element={<Hi></Hi>}></Route>
        </Route>
      </Routes>

      {/* footer section */}
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
