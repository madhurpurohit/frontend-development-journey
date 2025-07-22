import { useState } from "react";

//* Uncontrolled Component.
// export const ControlledComp = () => {
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const inputElem = document.querySelector(".input-elem");
//     console.log(inputElem.value);
//   };

//   return (
//     <div className="box-container" style={{ textAlign: "center" }}>
//       <h1>Controlled vs Uncontrolled Component</h1>

//       <div className="inner-box" style={{ flexDirection: "column" }}>
//         <form onSubmit={(e) => handleFormSubmit(e)}>
//           Name:
//           <input type="text" className="input-elem" />
//           <button style={{ marginLeft: "30px" }}>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

//* Controlled Component.
export const ControlledComp = () => {
  const [name, setName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(name);
  };

  return (
    <div className="box-container" style={{ textAlign: "center" }}>
      <h1>Controlled vs Uncontrolled Component</h1>

      <div className="inner-box" style={{ flexDirection: "column" }}>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          Name:
          <input
            type="text"
            className="input-elem"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button style={{ marginLeft: "30px" }}>Submit</button>
        </form>
      </div>
    </div>
  );
};
