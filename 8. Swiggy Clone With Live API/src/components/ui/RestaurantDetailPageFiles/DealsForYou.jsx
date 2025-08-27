import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const DealsForYou = ({ data }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [swiper1, setSwiper1] = useState(null);

  const dealsData = data?.cards
    ?.map((c) => c?.card?.card)
    ?.find((c) => c?.gridElements?.infoWithStyle?.offers);

  const handlePrev = () => {
    swiper1?.slidePrev();
  };

  const handleNext = () => {
    swiper1?.slideNext();
  };

  return (
    <>
      <div className="mt-10 mb-8 flex w-full justify-between">
        <h2 className="text-2xl max-sm:text-xl font-bold">Deals for you</h2>
        <div className="flex gap-4 px-4">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={isBeginning}
            className="rounded-full max-sm:h-6 bg-neutral-200 p-1 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
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
            className="rounded-full max-sm:h-6 bg-neutral-200 p-1 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
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
        {dealsData?.gridElements?.infoWithStyle?.offers?.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex w-[300px] rounded-[20px] border border-[#02060c26] p-3">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
                alt="Offer Logo"
                className="h-12 w-12"
              />
              <div className="ml-3 flex flex-col gap-0.5 text-[#02060ceb]">
                <div className="truncate text-lg font-bold">
                  {item?.info?.header}
                </div>
                <div className="text-sm font-semibold">
                  {item?.info?.couponCode}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pt-8 pb-4">
        <div className="mx-1 flex justify-center text-[13px] font-medium tracking-[4px] text-[#02060c99]">
          ~ Menu ~
        </div>
      </div>
    </>
  );
};
