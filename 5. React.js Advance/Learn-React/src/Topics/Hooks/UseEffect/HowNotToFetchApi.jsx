import { useState } from "react";

export const WrongWayTOFetchApi = () => {
  const [apiData, setApiData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error) => console.log(error));

  return (
    <>
      <div className="container effect-container">
        <ul>
          {apiData.map((curElem) => {
            return <li key={curElem.id}>{curElem.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
