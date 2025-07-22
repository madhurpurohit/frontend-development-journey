//* 2. Named Export.
//* A file can have multiple named exports. Each named export must be explicitly exported.

// export const NetflixSeries = () => {
const NetflixSeriesCard = () => {
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

//* 1. Default Export.
//* A file can have only one default export.
export default NetflixSeriesCard;

export const Footer = () => {
  return <p>Copyright @DevFlux</p>;
};
