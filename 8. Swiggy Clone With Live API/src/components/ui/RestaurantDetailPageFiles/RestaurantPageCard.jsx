import { NavLink } from "react-router";

export const RestaurantPageCard = ({ restData }) => {
  return (
    <div className="container mx-auto max-w-[80%]">
      <h2 className="text-2xl font-extrabold text-black">
        Restaurants with online food delivery in Delhi
      </h2>

      <div className="mt-15 mb-20 grid gap-8 sm:grid-cols-1 max-md:justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {restData?.map((item) => {
          return (
            <NavLink
              to={`/city/delhi/${item?.info?.name}/-rohini-rest/${item?.info?.id}`}
              className="flex w-60 flex-col gap-3 transition-transform duration-200 hover:scale-95"
              key={item?.info?.id + Math.floor(Math.random() * 100000)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    item?.info?.cloudinaryImageId
                  }
                  alt={item?.info?.name}
                  className="h-40 w-full object-cover"
                />
                <div className="absolute bottom-0 flex h-25 w-full items-end bg-gradient-to-t from-black/90 to-transparent px-3 pb-2 text-xl font-bold text-white">
                  {item?.info?.aggregatedDiscountInfoV3?.header}{" "}
                  {item?.info?.aggregatedDiscountInfoV3?.subHeader}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="truncate text-lg font-bold text-black">
                  {item?.info?.name}
                </p>
                <div className="flex items-center gap-1.5 text-[#02060ceb]">
                  <div className="h-5 w-5 self-baseline">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      stroke-color="rgba(2, 6, 12, 0.92)"
                      fill-color="rgba(2, 6, 12, 0.92)"
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
                  <p className="font-normal">{item?.info?.avgRatingString}</p>
                  <div className="h-1 w-1 rounded-full bg-neutral-600"></div>
                  <p className="font-medium">{item?.info?.sla?.slaString}</p>
                </div>
                <p className="mt-0.5 truncate text-[16px] font-normal text-[#02060c99]">
                  {item?.info?.cuisines?.join()}
                </p>
                <p className="truncate text-[16px] font-normal text-[#02060c99]">
                  {item?.info?.areaName}
                </p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
