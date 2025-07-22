//* How to import an CSS Module.
import styles from "./CSSModule.module.css";

export const CSSModule = (props) => {
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

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

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
          className={`${styles["user-rating"]} ${ratingClass}`}
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

/*
* CSS Modules:-
    • Every time you import a CSS file in your react component, they are
    regarded as global CSS.
    • CSS Modules help you keep styles specific to the component they're used
    in.
    • Each module encapsulates its styles, preventing unintended style conflicts
    with other modules.
    • The class names in CSS modules are often automatically generated,
    reducing the likelihood of naming clashes.

* CSS Module Rules:-
    • Name your CSS module files with the .module.css or .module.scss
    extension.
    • Import the CSS module file in your React component. Access class names
    as properties of the imported styles object.
    • Access class names as properties of the imported styles object.
    • Combine multiple class names using template literals or the classnames
    library.
    • Dynamically apply class names based on component state or props.

! CSS Module Important Things:-
    • When using CSS Modules, class names with hyphens can sometimes cause issues if not
    accessed correctly. In CSS Modules, you need to use bracket notation for class names with
    hyphens.
    • <div className={styles['card-content’]}>
    • Explanation:
    • Using Bracket Notation: In JavaScript, when accessing object properties with special
    characters (like hyphens), you need to use bracket notation instead of dot notation.
    • Dot Notation: styles.card-content will not work because . expects a valid JavaScript
    identifier, which cannot contain hyphens.
    • Bracket Notation: styles['card-content'] correctly accesses the class name from the
    imported styles object.
*/
