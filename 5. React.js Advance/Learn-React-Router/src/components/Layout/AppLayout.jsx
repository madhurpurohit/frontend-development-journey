import { Outlet, useNavigation } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { OrbitProgress } from "react-loading-indicators";

const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation.state);

  if (navigation.state === "loading")
    return (
      <div className="h-lvh w-full grid place-items-center">
        <OrbitProgress color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
      </div>
    );

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
