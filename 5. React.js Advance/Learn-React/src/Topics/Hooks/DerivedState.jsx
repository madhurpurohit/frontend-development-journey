import { useState } from "react";
import "../Event/EV.css";

export const DerivedState = () => {
  const [user, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ]);

  const userCount = user.length;

  const averageAge =
    user.reduce((accum, curElem) => accum + curElem.age, 0) / user.length;

  return (
    <div className="full-container">
      <h1>Users List</h1>
      <ul>
        {user.map((curElem) => {
          return (
            <li key={curElem.name}>
              {curElem.name} = {curElem.age} years old
            </li>
          );
        })}
      </ul>
      <p>Total User: {userCount}</p>
      <p>Average age: {averageAge}</p>
    </div>
  );
};
