import React, { useEffect, useState } from "react";

function Colorful({ name }) {
  const [color, setColor] = useState("#efefef");
  // document.body.style.backgroundColor = color;
  console.log("Rendering");

  useEffect(() => {
    document.body.style.backgroundColor = color;
    console.log("Use Effect Executed");
  }, [color]);

  console.log("Execute the function");
  //   console.log(name);

  return (
    <>
      <h1>Background Color Changer</h1>
      <div className="btn">
        <button
          style={{ backgroundColor: "red" }}
          id="red"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          id="blue"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "green" }}
          id="green"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "purple" }}
          id="purple"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button
          style={{ backgroundColor: "limegreen" }}
          id="limegreen"
          onClick={() => setColor("limegreen")}
        >
          LimeGreen
        </button>
      </div>
    </>
  );
}

export default React.memo(Colorful);
