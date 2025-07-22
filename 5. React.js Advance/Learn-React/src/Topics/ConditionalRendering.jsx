//* We can either return a JSX early or we can use ternary operators for conditionals in JSX.

import "../App.css";

function ConditionalRender() {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
}

const NetflixSeries = () => {
  const name = "Leo (Vijay Thalapathy)";

  const details = {
    ratings: 9.8,
    language: "Tamil",
  };

  const returnGenre = () => {
    const genre = "Action, Thriller, Crime";
    return genre;
  };

  let age = 17;
  //   let canWatch = "Not Available";

  //   if (age >= 18) canWatch = "Watch Now";

  //* Method1:- Using if statement.
  //! But this violates DRY (Do not Repeat Yourself) principle.
  //   if (age < 18) {
  //     return (
  //       <div>
  //         <div>
  //           <img
  //             src="/Leo_Logo.webp"
  //             alt="Leo movie poster"
  //             width="200px"
  //             height="200px"
  //           />
  //         </div>
  //         <h2>Name: {name}</h2>
  //         <h3>Rating: {5 + 4.5}</h3>
  //         <h3>Language: {details.language}</h3>
  //         <h3>Genre: {returnGenre()}</h3>
  //         <h3>Universe: Lokesh Cinematic Universe (LCU)</h3>
  //         <p>
  //           Parthiban is a calm and reserved café owner living a peaceful life
  //           with his wife and children in a quiet hill town. When he
  //           single-handedly stops a violent robbery, his heroic act catches
  //           national attention—but it also draws the eyes of dangerous men from
  //           his mysterious past. Soon, a powerful drug lord named Antony Das and
  //           his brother Harold arrive, claiming Parthiban is actually Leo Das, a
  //           ruthless gangster who faked his death. As violence escalates and
  //           secrets unravel, Parthiban must confront his hidden identity and the
  //           violent world he left behind, setting the stage for a high-stakes
  //           battle between his past and present.
  //         </p>
  //         <button>Not Available</button>
  //       </div>
  //     );
  //   }

  //* Method4:- Solutions can be better as it prevents cluttering of variables outside & encapsulates such logic inside a function. One another benefit is also that, we can also pass some dynamic values as function parameter.
  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };

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
      <h2>Name: {name}</h2>
      <h3>Rating: {5 + 4.5}</h3>
      <h3>Language: {details.language}</h3>
      <h3>Genre: {returnGenre()}</h3>
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

      {/* Method2:- Using Ternary Operator in JSX. */}
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}

      {/* Method3:- Sometimes we might have very complex if conditions, for that there are some solution. */}
      {/* <button>{canWatch}</button> */}

      {/* Method4:- */}
      <button>{canWatch()}</button>
    </div>
  );
};

export default ConditionalRender;
