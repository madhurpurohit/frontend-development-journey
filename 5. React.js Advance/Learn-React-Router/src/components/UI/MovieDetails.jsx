import { useLoaderData } from "react-router";

export const MovieDetails = () => {
  //   const params = useParams();
  //   console.log(params);
  //   console.log(params.movieID);

  const movieData = useLoaderData();
  // console.log(movieData);

  const { Poster, Title, Plot, Type } = movieData;

  return (
    <>
      <li className="hero-container hero-movie-container">
        <div className="main-container">
          <div className="poster-container">
            <img src={Poster} alt={Title} className="poster" />
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <h4 className="ticket__movie-title">{Title}</h4>
              <p className="ticket__current-price">{Plot}</p>
              <p className="ticket__current-price">Type: {Type} </p>
              <button className="ticket__but-btn">Watch Now</button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
