import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

//* In github PI we can hit 60 times API request in 1 hour.

function GithubProfile() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile />);
