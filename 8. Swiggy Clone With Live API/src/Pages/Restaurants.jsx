import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { SliderCard } from "../components/layout/SliderCard";
import { RestaurantPageCard } from "../components/ui/RestaurantDetailPageFiles/RestaurantPageCard";
import { foodDeliveryData } from "../data/foodDeliveryData";
import { useQuery } from "@tanstack/react-query";
import { restaurantData } from "../api/restData";
import {
  FooterShimmer,
  HeaderShimmerEffect,
  RestaurantPageCardShimmer,
  SliderCardShimmer,
} from "../components/layout/RestaurantsPageShimmerEffect";

export default function Restaurants() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["restaurants"],
    queryFn: restaurantData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });

  if (isLoading) {
    return (
      <>
        <HeaderShimmerEffect />
        <SliderCardShimmer />
        <div className="container mx-auto my-8 max-w-[80%]">
          <i className="block h-[1px] w-full bg-neutral-500 opacity-20" />
        </div>
        <RestaurantPageCardShimmer />
        <FooterShimmer />
      </>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <div className="bg-[url(`https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png`)] bg-cover bg-no-repeat"></div>
    );
  }

  return (
    <>
      <Header />
      <SliderCard
        data={foodDeliveryData}
        space={"p-4"}
        show={false}
        title={"What's on your mind?"}
      />
      <div className="container mx-auto my-8 max-w-[80%]">
        <i className="block h-[1px] w-full bg-neutral-500 opacity-20" />
      </div>
      <RestaurantPageCard restData={data} />
      <Footer />
    </>
  );
}
