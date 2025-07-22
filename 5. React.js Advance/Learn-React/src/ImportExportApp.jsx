import "./App.css";
//* 1. Default Import: When importing a default export, you can name the import whatever you like.
// import NetflixSeries from "./Topics/Import&Export";
// import FavoriteSeries from "./Topics/Import&Export";

//* 2. Named Import:- When importing named exports, the import names must match the export names exactly. Named imports must be enclosed in curly braces.
// import { Footer, NetflixSeries } from "./Topics/Import&Export";

//* 3. Mixed Imports:
import NetflixSeriesCard from "./Topics/Import&Export";
import { Footer } from "./Topics/Import&Export";

// function App() {
//   return (
//     <div>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </div>
//   );
// }
function ImportExportApp() {
  return (
    <>
      <NetflixSeriesCard />
      <NetflixSeriesCard />
      <NetflixSeriesCard />
      <NetflixSeriesCard />
      <NetflixSeriesCard />
      <Footer />
    </>
  );
}

export default ImportExportApp;
