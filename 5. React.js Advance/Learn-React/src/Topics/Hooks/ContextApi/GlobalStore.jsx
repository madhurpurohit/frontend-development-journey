import { createContext } from "react";

//* Step1:- First we create a context which is used to create a provider, & than this provider will give the data to it's child.
export const BioContext = createContext(); // It will create a component Context object.

//* Step2:- Here we create a provider. It will be a fat arrow function & inside this function we pass {children} as parameter, & this point to all it's children.
export const BioProvider = ({ children }) => {
  const myName = "DevFlux";
  const myAge = 24;

  console.log(children);

  //* If we have single value than we can pass it in value prop like below.
  //   return <BioContext value={(myName, myAge)}>{children}</BioContext>; // Here in value prop we pass all that variable,state or properties which we use in any component.

  //* If we have multiple values than we pass it in value prop like below.
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

//todo Note:- All the component are always being exported otherwise it won't work.
