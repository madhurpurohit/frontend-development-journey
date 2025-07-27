import { useContext } from "react";
import { BioContext } from "./GlobalStore";

export const Home = () => {
  //* The below code will be use our provider have only single value.
  //   const myName = useContext(BioContext);

  //* If our provider have multiple value than we always destructure them.
  const { myName, myAge } = useContext(BioContext);

  return (
    <>
      <h1>
        This is Home page. I am {myName}. & I am {myAge} years old.
      </h1>
    </>
  );
};
