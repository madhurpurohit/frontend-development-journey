import styled from "styled-components";
import styles from "./CSSModule.module.css";

export const TailwindCSS = (props) => {
  const { id, img_url, name, rating, genre, cast, description, watch_url } =
    props.curElem;

  const MyButton = styled.button`
    transition: all 0.25s ease-out;
    padding: 8px 16px;
    border: 1px solid transparent;
    cursor: pointer;
    fontweight: ${(props) => (props.rating >= 8.5 ? "900" : "500")};
    font-size: 1.3rem;
    border-radius: 7px;
    outline: none;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li>
      <div>
        <img src={img_url} alt={id} width="40%" height="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>
        Rating:{" "}
        <span className={`${styles["user-rating"]} ${ratingClass}`}>
          {rating}
        </span>
      </h3>
      <h4>Genre: {genre}</h4>
      <h4>Cast: {cast}</h4>
      <p className="text-3xl font-bold leading-7">Summary: {description}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <MyButton rating={rating}>Watch Now</MyButton>
      </a>
    </li>
  );
};
