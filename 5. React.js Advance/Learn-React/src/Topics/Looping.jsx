//* We don’t have for loops in JSX, so we have to use .map() method of arrays.
/* r
return (
    <ul>
        {students.map((student) => (
        <li key={student}>{student}</li>
        ))}
    </ul>
);
*/
//* React.js will complain if we don't pass key prop to li.
//* React.js uses keys to differentiate each element, so that it can remove or edit correct element when a students gets added or removed.
//* We can use Arrays's in JSX too. So here students.map returns array of JSX which gets rendered on the page.

import seriesData from "../api/seriesData.json";

const NetflixSeriesLooping = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <img
                src={curElem.img_url}
                alt={curElem.id}
                width="40%"
                height="40%"
              />
            </div>
            <h2>Name: {curElem.name}</h2>
            <h3>Rating: {curElem.rating}</h3>
            <h4>Genre: {curElem.genre}</h4>
            <h4>Cast: {curElem.cast}</h4>
            <p>Summary: {curElem.description}</p>
            <a
              href={curElem.watch_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Watch Now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NetflixSeriesLooping;
