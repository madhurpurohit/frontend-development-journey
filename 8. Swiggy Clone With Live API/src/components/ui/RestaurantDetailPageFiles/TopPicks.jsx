import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const TopPicks = ({ data }) => {
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
      <div className="container mx-auto mt-4 max-w-full p-4">
        <div className="mb-4 flex w-full justify-between">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <div className="flex gap-4 px-4">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className="rounded-full max-sm:h-5 bg-neutral-200 p-1 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 max-sm:h-4 max-sm:w-4"
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
              className="rounded-full max-sm:h-5 bg-neutral-200 p-1 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 max-sm:h-4 max-sm:w-4"
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
          {data?.carousel?.map((item, index) => (
            <SwiperSlide key={index} className="flex !w-auto gap-4">
              <div className="flex gap-2">
                <div className="relative w-[20vw]">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +
                      item?.creativeId
                    }
                    alt={item?.title}
                    className="relative w-full object-cover"
                  />
                  <div className="absolute right-0 bottom-0 left-0 px-4 pb-4">
                    <div className="mt-5 flex max-lg:flex-col items-center justify-between">
                      <div className="text-base max-sm:text-sm max-lg:font-bold font-medium max-lg:text-lg text-white">
                        &#8377; {item?.dish?.info?.price / 100}
                      </div>
                      <div className="flex h-[38px] w-30 max-lg:h-[28px] max-lg:w-20 max-lg:text-base max-sm:text-[12px] max-sm:h-[18px] max-sm:w-13 items-center justify-center rounded-xl border border-white bg-white text-xl font-bold text-green-800">
                        ADD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="relative z-20 mt-6 mb-8 h-4 border-b-16 border-[#02060c0d]"
      ></div>
    </>
  );
};
