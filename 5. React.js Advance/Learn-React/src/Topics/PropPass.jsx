export const PropPass = (props) => {
  console.log(props);

  return (
    <li key={props.curElem.id}>
      <div>
        <img
          src={props.curElem.img_url}
          alt={props.curElem.id}
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: {props.curElem.name}</h2>
      <h3>Rating: {props.curElem.rating}</h3>
      <h4>Genre: {props.curElem.genre}</h4>
      <h4>Cast: {props.curElem.cast}</h4>
      <p>Summary: {props.curElem.description}</p>
      <a
        href={props.curElem.watch_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Watch Now</button>
      </a>
    </li>
  );
};
