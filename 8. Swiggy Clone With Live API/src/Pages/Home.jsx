import Footer from "../components/layout/Footer";
import HomeHeader from "../components/layout/HomeHeader";
import { DineoutRestaurantsCard } from "../components/ui/homePageFiles/DineoutRestaurantsCard";
import { HomeDishesCard } from "../components/ui/homePageFiles/HomeDishesCard";
import { HomeGroceryCard } from "../components/ui/homePageFiles/HomeGroceryCard";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeDishesCard />
      <HomeGroceryCard />
      <DineoutRestaurantsCard />
      <div className="mt-20">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="App Download QR Code"
          className="mb-20"
        />
      </div>
      <Footer />
    </>
  );
}
