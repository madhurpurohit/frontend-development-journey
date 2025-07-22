import "./App.css";
import { AddCSS } from "./Topics/AddingExternalCSS";
import NetflixSeriesLooping from "./Topics/Looping";
import Profile from "./Topics/ProfileChallenge";
import Props from "./Topics/Props";

function App() {
  return (
    <div className="container">
      {/* <NetflixSeriesLooping /> */}
      <h1>list of popular web-series</h1>
      <Props />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
