//* Method1:-
// export const DestructuringProp = (props) => {
//   const { curElem } = props;
//   console.log(curElem);

//   return (
//     <li key={id}>
//       <div>
//         <img src={img_url} alt={id} width="40%" height="40%" />
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating: {rating}</h3>
//       <h4>Genre: {genre}</h4>
//       <h4>Cast: {cast}</h4>
//       <p>Summary: {description}</p>
//       <a href={watch_url} target="_blank" rel="noopener noreferrer">
//         <button>Watch Now</button>
//       </a>
//     </li>
//   );
// };

//* Method2:-
// export const DestructuringProp = (props) => {
//   const { id, img_url, name, rating, genre, cast, description, watch_url } =
//     props.curElem;

//   return (
//     <li key={id}>
//       <div>
//         <img src={img_url} alt={id} width="40%" height="40%" />
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating: {rating}</h3>
//       <h4>Genre: {genre}</h4>
//       <h4>Cast: {cast}</h4>
//       <p>Summary: {description}</p>
//       <a href={watch_url} target="_blank" rel="noopener noreferrer">
//         <button>Watch Now</button>
//       </a>
//     </li>
//   );
// };

//* Method3:-
export const DestructuringProp = ({ curElem }) => {
  const { id, img_url, name, rating, genre, cast, description, watch_url } =
    curElem;

  return (
    <li key={id}>
      <div>
        <img src={img_url} alt={id} width="40%" height="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <h4>Genre: {genre}</h4>
      <h4>Cast: {cast}</h4>
      <p>Summary: {description}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
