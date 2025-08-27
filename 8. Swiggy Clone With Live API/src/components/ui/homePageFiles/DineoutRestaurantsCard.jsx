import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { dineoutRestaurantsData } from "../../../data/dineoutRestaurantsData";
import { RestaurantsCard } from "../RestaurantDetailPageFiles/RestaurantCard";

export const DineoutRestaurantsCard = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [swiper1, setSwiper1] = useState(null);

  const handlePrev = () => {
    swiper1?.slidePrev();
  };

  const handleNext = () => {
    swiper1?.slideNext();
  };

  return (
    <>
      <div className="container mx-auto mt-30 max-w-[76%]">
        <div className="mb-8 flex w-full justify-between">
          <h2 className="text-2xl font-bold">
            Discover best restaurants on Dineout
          </h2>
          <div className="flex gap-4 px-4">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className="rounded-full bg-neutral-200 p-1 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              disabled={isEnd}
              className="rounded-full bg-neutral-200 p-1 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={setSwiper1}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => {
            setIsBeginning(false);
            setIsEnd(false);
          }}
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={30}
          className="w-full"
        >
          {dineoutRestaurantsData?.map((item, index) => (
            <SwiperSlide key={index} className="flex !w-auto gap-4">
              <RestaurantsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
