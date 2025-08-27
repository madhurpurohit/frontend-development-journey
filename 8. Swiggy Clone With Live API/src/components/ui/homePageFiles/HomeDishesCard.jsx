import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { dishesDataCol1, dishesDataCol2 } from "../../../data/dishesData";

export const HomeDishesCard = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);

  const handlePrev = () => {
    swiper1?.slidePrev();
    swiper2?.slidePrev();
  };

  const handleNext = () => {
    swiper1?.slideNext();
    swiper2?.slideNext();
  };

  return (
    <div className="container mx-auto mt-30 max-w-[76%]">
      <div className="mb-4 flex w-full justify-end gap-4 px-4">
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

      {/* Pehla Swiper */}
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
        {dishesDataCol1?.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex cursor-pointer flex-col items-center justify-center space-y-2">
              <a href={item.action.link} target="_blank">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                    item.imageId
                  }
                  alt={item.action.text}
                  className="h-[180px] w-[144px] object-cover"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Doosra Swiper */}
      <Swiper
        onSwiper={setSwiper2}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="mt-4 w-full"
      >
        {dishesDataCol2?.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex cursor-pointer flex-col items-center justify-center space-y-2">
              <a href={item.action.link}>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                    item.imageId
                  }
                  alt={item.action.text}
                  className="h-[180px] w-[144px] object-cover"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
