export const RestaurantInfo = ({ data }) => {
  const restData = data?.cards?.map((c) => c?.card?.card)?.find((c) => c?.info);

  return (
    <>
      <div className="mb-2 ml-4">
        <div className="my-[18px] text-[28px] font-extrabold">
          {restData?.info?.name}
        </div>
      </div>
      <div className="w-full rounded-br-[36px] rounded-bl-[36px] bg-[linear-gradient(to_bottom,rgb(255,255,255)_-6.71%,rgb(235,235,242)_56.19%,rgb(223,223,231)_106.56%)] px-4 pt-0 pb-4">
        <div className="w-full rounded-[20px] bg-white">
          <div className="mx-4 mt-5 flex items-center text-base font-semibold text-[#02060ceb]">
            <div className="mr-1 h-5 w-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                strokecolor="rgba(2, 6, 12, 0.92)"
                fillcolor="rgba(2, 6, 12, 0.92)"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                ></circle>
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#21973B"></stop>
                    <stop offset="1" stopColor="#128540"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <span>{restData?.info?.avgRatingString}</span>
              <span>({restData?.info?.totalRatingsString})</span>
            </div>
            <div className="mx-2 h-0.5 w-0.5 bg-[#02060c73]"></div>
            <div>{restData?.info?.costForTwoMessage}</div>
          </div>
          <div className="mx-5 my-2 cursor-pointer text-[14px] font-semibold text-[#ff5200]">
            {restData?.info?.cuisines?.join(", ")}
          </div>
          <div className="mx-5 flex w-full">
            <div className="flex flex-col items-center pt-[5px]">
              <div className="h-[7px] w-[7px] rounded-full bg-[#c4c4c4]"></div>
              <div className="h-[23px] w-[1px] bg-[#c4c4c4]"></div>
              <div className="h-[7px] w-[7px] rounded-full bg-[#c4c4c4]"></div>
            </div>
            <div className="ml-3 flex w-full flex-col pr-4 text-[14px] font-semibold">
              <div>
                <span>Outlet</span>
                <span className="ml-3 font-light">Rohini</span>
              </div>
              <div className="mt-2 mb-6">
                Deliver within {restData?.info?.sla?.slaString}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
