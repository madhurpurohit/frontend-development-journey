import { About } from "./About";
import { BioProvider } from "./GlobalStore";
import { Home } from "./Home";

export const ContextApi = () => {
  return (
    <>
      <BioProvider>
        <Home />
        <About />
      </BioProvider>
    </>
  );
};
