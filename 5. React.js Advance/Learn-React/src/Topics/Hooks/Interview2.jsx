import { useState } from "react";
import "../Event/EV.css";

//* Method1:- using loop.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];

// export const Interview2 = () => {
//   return (
//     <div className="full-container">
//       <h1>Users List</h1>
//       <ul>
//         {users.map(({ name, age }) => {
//           return (
//             <li key={name}>
//               {name} - {age} years old.
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

//* Method2:- Using State/hooks.
export const Interview2 = () => {
  const [user, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  return (
    <div className="full-container">
      <h1>Users List</h1>
      <ul>
        {user.map((curElem) => {
          return (
            <li key={curElem.name}>
              {curElem.name} - {curElem.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
