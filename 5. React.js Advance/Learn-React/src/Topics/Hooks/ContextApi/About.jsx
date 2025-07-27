// import { useContext } from "react";
import { use } from "react";
import { BioContext } from "./GlobalStore";

export const About = () => {
  // const { myName, myAge } = useContext(BioContext);

  //* In React V19 instead of using useContext() hook, we can now use use() API.
  const { myName, myAge } = use(BioContext);

  return (
    <>
      <h1>
        This is About page.I am {myName}. & I am {myAge} years old.
      </h1>
    </>
  );
};
