import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const SliderCard = ({ data, space, show, title }) => {
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
      <div className={`container mx-auto max-w-[76%] ${space}`}>
        <div className="mb-8 flex w-full justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-4 px-4">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className="rounded-full max-sm:h-6 bg-neutral-200 p-1 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
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
              className="rounded-full max-sm:h-6 bg-neutral-200 p-1 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
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
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="flex w-[144px] cursor-pointer flex-col items-center justify-center">
                <a href={item.action.link} target="_blank">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                      item.imageId
                    }
                    alt={item.action.text}
                    className="h-[180px] object-cover"
                  />
                </a>
                {show && (
                  <p className="pt-2.5 text-center text-xl font-semibold">
                    {item.action.text}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
