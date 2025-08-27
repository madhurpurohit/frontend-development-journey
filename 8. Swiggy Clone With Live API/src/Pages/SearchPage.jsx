import { useNavigate, useParams } from "react-router";
import { Header } from "../components/layout/Header";
import { IoIosSearch } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { getData } from "../api/restDetailById";
import { HeaderShimmerEffect } from "../components/layout/RestaurantsPageShimmerEffect";
import { useQuery } from "@tanstack/react-query";
import { searchFunctionality } from "../utils/SearchFunctionality";
import { SubDishMenu } from "../components/ui/RestaurantDetailPageFiles/SubDishMenu";

export default function SearchPage() {
  const params = useParams();
  const id = params.id;
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  let info;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["restaurants", id],
    queryFn: () => getData(id),
    refetchOnWindowFocus: false, // ✅ window focus hone pe dobara fetch na ho
    refetchOnMount: false, // ✅ component mount hone pe dobara fetch na ho
    staleTime: Infinity, // ✅ data kabhi stale na ho
  });

  //   console.log(data);
  const cardsData = data?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards,
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (isLoading) {
    return (
      <>
        <HeaderShimmerEffect />
        <div className="animate-pulse">
          <div className="container mx-auto my-8 max-w-200 p-4">
            <div className="h-10 w-full rounded-2xl bg-gray-300"></div>
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    console.log(error);
  }

  if (input.length > 1) info = searchFunctionality(cardsData, input);

  // console.log(info);

  return (
    <div className="bg-white">
      <Header />
      <div className="relative z-100 w-full bg-white">
        <div className="relative container mx-auto mt-5 max-w-200 pb-12">
          <div className="sticky top-0 z-2 flex h-13 items-center border-b border-[#02060c1a] pr-4 text-black">
            <FiArrowLeft
              className="m-4 text-2xl cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <form className="h-full w-full">
              <input
                type="text"
                name="search"
                id="search"
                required
                className="h-full w-full border-none bg-transparent text-lg font-semibold outline-none"
                placeholder={`Search in ${params.rest}`}
                value={input}
                autoComplete="off"
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
            <IoIosSearch className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 max-w-[800px]">
        <div className="mx-4 mb-4 pl-3">
          {input.length > 1 && info.length !== 0 ? (
            info?.map((curElem, index, arr) => {
              return (
                <SubDishMenu
                  info={curElem}
                  index={index === arr.length - 1}
                  key={curElem?.name}
                />
              );
            })
          ) : input.length > 1 ? (
            <div className="text-center text-2xl font-bold tracking-wider capitalize">
              sorry!! we don't have your dish. Search something else.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
