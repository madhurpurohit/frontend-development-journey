import { CustomHook } from "./CustomHook";
import { Bio1Provider } from "./GlobalStoreCustomHook";

export const ContextApiCustomHook = () => {
  return (
    <>
      <Bio1Provider>
        <CustomHook />
      </Bio1Provider>
    </>
  );
};
