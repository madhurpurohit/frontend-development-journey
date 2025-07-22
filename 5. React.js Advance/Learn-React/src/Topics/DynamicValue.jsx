//* We can add any variables of your component in JSX using {} syntax.

//* 1. Variables
//? We can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

//* Expressions
//? JSX allows us to write JavaScript expressions inside curly braces. This includes operations, function calls, & other JavaScript expressions that produce a value.

//* 3. Function Calls
//? Functions, especially those that return JSX, can be invoked directly within our JSX.

import "../App.css";

function MyComponent() {

  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
    const name = "Leo (Vijay Thalapathy)";

    const details = {
        ratings: 9.8,
        language: "Tamil",
    };

    const returnGenre = () => {
        const genre = "Action, Thriller, Crime";
        return genre;
    }

  return (
    <div>
      <div>
        <img src="/Leo_Logo.webp" alt="Leo movie poster" width="200px" height="200px"/>
      </div>
      <h2>Name: { name}</h2>
      <h3>Rating: { 5+4.5}</h3>
      <h3>Language: { details.language}</h3>
      <h3>Genre: {returnGenre()}</h3>
      <h3>Universe: Lokesh Cinematic Universe (LCU)</h3>
      <p>Parthiban is a calm and reserved café owner living a peaceful life with his wife and children in a quiet hill town. When he   single-handedly stops a violent robbery, his heroic act catches national attention—but it also draws the eyes of dangerous men from    his mysterious past. Soon, a powerful drug lord named Antony Das and his brother Harold arrive, claiming Parthiban is actually Leo  Das, a ruthless gangster who faked his death. As violence escalates and secrets unravel, Parthiban must confront his hidden identity  and the violent world he left behind, setting the stage for a high-stakes battle between his past and present.</p>
    </div>
  );
};

export default MyComponent;
