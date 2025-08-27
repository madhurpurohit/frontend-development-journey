import { Header } from "../components/layout/Header";
import { NavLink, useParams } from "react-router";
import { RestaurantInfo } from "../components/ui/RestaurantDetailPageFiles/RestaurantInfo";
import { DealsForYou } from "../components/ui/RestaurantDetailPageFiles/DealsForYou";
import { RestDishesDetails } from "../components/ui/RestaurantDetailPageFiles/RestDishesDetails";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/restDetailById";
import { HeaderShimmerEffect } from "../components/layout/RestaurantsPageShimmerEffect";
import {
  DealsForYouShimmer,
  RestaurantInfoShimmer,
  RestDishesDetailsShimmer,
  TopPicksShimmer,
} from "../components/layout/RestuarantDetailPageShimmer";
import { IoIosSearch } from "react-icons/io";

export default function RestaurantDetailPage() {
  const params = useParams();
  const restName = params.rest;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["restaurants", params.id],
    queryFn: () => getData(params.id),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });

  if (isLoading) {
    return (
      <div className="bg-white">
        <HeaderShimmerEffect />
        <div className="container mx-auto mt-5 max-w-[800px]">
          <div className="animate-pulse">
            <div className="flex items-center gap-2 text-[10px] font-light">
              {/* "Home" placeholder */}
              <div className="h-3 w-10 rounded-md bg-gray-300"></div>
              <span>/</span>
              {/* "Delhi" placeholder */}
              <div className="h-3 w-8 rounded-md bg-gray-300"></div>
              <span>/</span>
              {/* Restaurant Name placeholder */}
              <div className="h-3 w-24 rounded-md bg-gray-300"></div>
            </div>
          </div>
          <RestaurantInfoShimmer />
          <DealsForYouShimmer />
          <div className="h-12 w-full rounded-xl bg-gray-300 px-4"></div>
          <TopPicksShimmer />
          <RestDishesDetailsShimmer />
        </div>
      </div>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <div className="bg-[url(`https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png`)] bg-cover bg-no-repeat"></div>
    );
  }

  return (
    <div className="bg-white">
      <Header />
      <div className="container mx-auto mt-5 px-8 max-w-4xl">
        <div className="text-[10px] font-light text-[#02060c80]">
          <NavLink to="/" className="cursor-pointer hover:font-semibold">
            Home
          </NavLink>{" "}
          / <span className="cursor-pointer hover:font-semibold">Delhi</span> /{" "}
          <span className="cursor-pointer font-semibold">{restName}</span>
        </div>
        <RestaurantInfo data={data} />
        <DealsForYou data={data} />
        <NavLink to="search?hideHeader=false">
          <div className="flex items-center rounded-xl bg-[#02060c0d] px-4 text-xl">
            <div className="flex h-12 w-full items-center justify-center text-base text-neutral-500">
              Search For Dishes
            </div>
            <IoIosSearch />
          </div>
        </NavLink>
        <RestDishesDetails data={data} />
      </div>
    </div>
  );
}
