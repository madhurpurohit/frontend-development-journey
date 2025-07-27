import { createContext, useContext } from "react";

//* Step1:- First we create a context which is used to create a provider, & than this provider will give the data to it's child.
export const Bio1Context = createContext(); // It will create a component Context object.

//* Step2:- Here we create a provider. It will be a fat arrow function & inside this function we pass {children} as parameter, & this point to all it's children.
export const Bio1Provider = ({ children }) => {
  const myName = "DevFlux";
  const myAge = 24;

  console.log(children);

  //* If we have single value than we can pass it in value prop like below.
  //   return <BioContext value={(myName, myAge)}>{children}</BioContext>; // Here in value prop we pass all that variable,state or properties which we use in any component.

  //* If we have multiple values than we pass it in value prop like below.
  return (
    <Bio1Context.Provider value={{ myName, myAge }}>
      {children}
    </Bio1Context.Provider>
  );
};

//todo Note:- All the component are always being exported otherwise it won't work.

//* How to make custom hook?
export const useBio1Context = () => {
  const context = useContext(Bio1Context);

  //* Throw error if the child is not wrapped inside Provider.
  if (context === undefined) {
    throw new Error("Component must be wrapped with Bio1Provider.");
  }

  return context;
};
