import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("ABCSDIH");
  const [length, setLength] = useState("10");
  const [numberChange, setNumberChange] = useState(false);
  const [charChange, setCharChange] = useState(false);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberChange) {
      str += "0123456789";
    }
    if (charChange) {
      str += "@$*~`+-/*";
    }

    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }, [length, numberChange, charChange]);

  useEffect(() => {
    generatePassword();
  }, [length, charChange, numberChange]);

  return (
    <>
      <h1>{password}</h1>
      <div className="container">
        <input
          type="range"
          min={5}
          max={25}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length ({length})</label>

        <input
          type="checkbox"
          onChange={() => setNumberChange(!numberChange)}
        />
        <label>Number</label>

        <input type="checkbox" onChange={() => setCharChange(!charChange)} />
        <label>Special Character</label>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />
);
