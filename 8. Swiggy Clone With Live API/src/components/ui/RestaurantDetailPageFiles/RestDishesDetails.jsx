import { useState } from "react";
import { DishMenu } from "./DishMenu";
import { hrLine, vegIcon, nonVegIcon } from "../../../assets/icons";
import { TopPicks } from "./TopPicks";

export const RestDishesDetails = ({ data }) => {
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);

  const dishData = data?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR,
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const dishesData = dishData?.filter(
    (d) => d?.card?.card && "title" in d.card.card,
  );

  // console.log(dishesData);

  return (
    <div className="mx-4 mb-4">
      <div>
        <div className="m-5 flex">
          <div
            className="mr-2 cursor-pointer"
            onClick={() => {
              setIsVeg(!isVeg);
              setIsNonVeg(false);
            }}
          >
            <div className="flex h-[34px] max-w-18 items-center rounded-full border border-[#02060c26] bg-white px-4">
              <div className="relative h-[10px] w-[38px] rounded-full bg-[#02060c26]">
                <div
                  className={`absolute h-[10px] rounded-full bg-[#1ba672] transition-all duration-200 ${isVeg ? "w-[38px]" : "w-0"} `}
                ></div>
                <div
                  className={`absolute -top-1/2 h-5 w-5 bg-white transition-transform duration-200 ${isVeg ? "translate-x-[21px]" : "-translate-x-0.5"}`}
                >
                  {vegIcon}
                </div>
              </div>
            </div>
          </div>
          <div
            className="mr-2 cursor-pointer"
            onClick={() => {
              setIsNonVeg(!isNonVeg);
              setIsVeg(false);
            }}
          >
            <div className="flex h-[34px] max-w-18 items-center rounded-full border border-[#02060c26] bg-white px-4">
              <div className="relative h-[10px] w-[38px] rounded-full bg-[#02060c26]">
                <div
                  className={`absolute h-[10px] rounded-full bg-[#fa3c5a] transition-all duration-150 ${isNonVeg ? "w-[38px]" : "w-0"} `}
                ></div>
                <div
                  className={`absolute -top-1/2 h-5 w-5 bg-white transition-transform duration-150 ${isNonVeg ? "translate-x-[21px]" : "-translate-x-0.5"}`}
                >
                  {nonVegIcon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hrLine}
      {dishesData?.map((item, index, arr) => {
        if (!item?.card?.card?.itemCards) {
          if (item?.card?.card?.title === "Top Picks") {
            return (
              <div key={item?.card?.card?.title}>
                <TopPicks data={item?.card?.card} />
              </div>
            );
          }
          return (
            <div key={item?.card?.card?.title}>
              <div className="font-800 mt-5 mb-6 flex cursor-pointer justify-between pr-4 pl-3 text-lg font-extrabold">
                <div>{item?.card?.card?.title} </div>
              </div>
              {item?.card?.card?.categories?.map((curElem, index, arr) => {
                return (
                  <DishMenu
                    item={{ card: { card: curElem } }}
                    key={curElem?.title}
                    isVegSort={isVeg}
                    isNonVegSort={isNonVeg}
                    fontSize={600}
                    index={index === arr.length - 1}
                  />
                );
              })}
            </div>
          );
        }
        return (
          <DishMenu
            item={item}
            key={item?.card?.card?.title}
            isVegSort={isVeg}
            isNonVegSort={isNonVeg}
            fontSize={800}
            index={index === arr.length - 1}
          />
        );
      })}
    </div>
  );
};
