import { useBio1Context } from "./GlobalStoreCustomHook";

export const CustomHook = () => {
  const { myName, myAge } = useBio1Context();

  return (
    <>
      <section
        className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center  items-center bg-gray-900 text-white`}
      >
        <h1>
          This is Custom Hook. I am {myName}. & I am {myAge} years old.
        </h1>
      </section>
    </>
  );
};
