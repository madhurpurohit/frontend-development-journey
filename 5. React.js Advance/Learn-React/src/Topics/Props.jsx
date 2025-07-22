//* • React props (properties) facilitate data transfer from parent to child components.
//* • Data flows uni-directionally, ensuring a clear direction of information in React applications.
//* • Props are immutable, meaning child components cannot modify the data received from parents.
//* • Child components access props through their function parameters.
//* • We can also pass JSX as props to another component.

import seriesData from "../api/seriesData.json";
// import { AddCSS } from "./AddingExternalCSS";
// import { CSSModule } from "./CSSModule";
// import { StyleComponent } from "./StyledComponent";
import { TailwindCSS } from "./TailwindCSS";
// import { DestructuringProp } from "./DestructuringProps";
// import { PropPass } from "./PropPass";

const Props = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((curElem) => {
        // return <PropPass key={curElem.id} curElem={curElem} />;
        // return <DestructuringProp key={curElem.id} curElem={curElem} />;
        // return <AddCSS key={curElem.id} curElem={curElem} />;
        // return <CSSModule key={curElem.id} curElem={curElem} />;
        // return <StyleComponent key={curElem.id} curElem={curElem} />;
        return <TailwindCSS key={curElem.id} curElem={curElem} />;
      })}
    </ul>
  );
};

export default Props;
