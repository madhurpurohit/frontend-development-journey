import React, { Fragment } from "react";
import "../App.css";

//* To remove extra div which we use to wrap all the elements.

//todo Method1:- Using an Array of Elements with Keys
// function Fragment1() {
//     return [<NetflixSeries key="1" />, <NetflixSeries key="2" />];
// }

//todo Method2:- Using import { Fragment } from “react”; & return <Fragment> // </Fragment>.
// function Fragment1() {

//   return (
//     <React.Fragment>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </React.Fragment>
//   );
// };

//todo Method3:- Shorthand Fragment Notation. <> // </>
function Fragment1() {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
}

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img
          src="/Leo_Logo.webp"
          alt="Leo movie poster"
          width="200px"
          height="200px"
        />
      </div>
      <h2>Name: Leo (Vijay Thalapathy)</h2>
      <h3>Rating: 9.7</h3>
      <h3>Language: Tamil</h3>
      <h3>Genre: Action, Thriller, Crime</h3>
      <h3>Universe: Lokesh Cinematic Universe (LCU)</h3>
      <p>
        Parthiban is a calm and reserved café owner living a peaceful life with
        his wife and children in a quiet hill town. When he single-handedly
        stops a violent robbery, his heroic act catches national attention—but
        it also draws the eyes of dangerous men from his mysterious past. Soon,
        a powerful drug lord named Antony Das and his brother Harold arrive,
        claiming Parthiban is actually Leo Das, a ruthless gangster who faked
        his death. As violence escalates and secrets unravel, Parthiban must
        confront his hidden identity and the violent world he left behind,
        setting the stage for a high-stakes battle between his past and present.
      </p>
    </div>
  );
};

export default Fragment1;

//* In React.js, a component can’t return multiple elements without a wrapper div.
//! Why can't we return multiple elements at the same time?
//? As after JSX is compiled it is converted to normal JavaScript object, you can’t return multiple JavaScript object at the same time.
