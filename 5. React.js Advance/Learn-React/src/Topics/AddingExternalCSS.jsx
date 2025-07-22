export const AddCSS = (props) => {
  const { id, img_url, name, rating, genre, cast, description, watch_url } =
    props.curElem;

  const btn_style = {
    transition: "all 0.25s ease-out",
    padding: "8px 16px",
    border: "1px solid transparent",
    cursor: "pointer",
    fontWeight: `${rating >= 8.5 ? 900 : 500}`,
    fontSize: "1.3rem",
    borderRadius: "7px",
    outline: "none",
  };

  const ratingClass = rating >= 8.5 ? "super_hit" : "average";

  return (
    <li>
      <div>
        <img src={img_url} alt={id} width="40%" height="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>
        Rating:{" "}
        <span
          // className={`user-rating ${rating >= 8.5 ? "super_hit" : "average"}`}
          className={`user-rating ${ratingClass}`}
        >
          {rating}
        </span>
      </h3>
      <h4>Genre: {genre}</h4>
      <h4>Cast: {cast}</h4>
      <p>Summary: {description}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <button style={btn_style}>Watch Now</button>
      </a>
    </li>
  );
};
