import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SubDishMenu } from "./SubDishMenu";
import { hrLine } from "../../../assets/icons";

export const DishMenu = ({
  item,
  fontSize,
  index,
  isVegSort,
  isNonVegSort,
}) => {
  const [isActive, setIsActive] = useState(true);
  const data = structuredClone(item);

  if (isVegSort) {
    data.card.card.itemCards = data?.card?.card?.itemCards?.filter(
      (curElem) => curElem?.card?.info?.isVeg === 1,
    );
  }
  if (isNonVegSort) {
    data.card.card.itemCards = data?.card?.card?.itemCards?.filter(
      (curElem) => curElem?.card?.info?.isVeg !== 1,
    );
  }

  // console.log(item);

  return (
    <>
      {data?.card?.card?.itemCards?.length !== 0 && (
        <div className="mt-5">
          <div className="pl-3">
            <div>
              <div
                className={`mb-6 flex cursor-pointer justify-between pr-4 text-lg max-sm:text-base items-center ${fontSize === 800 ? "font-extrabold" : "font-semibold"}`}
                onClick={() => setIsActive(!isActive)}
              >
                <div>
                  {data?.card?.card?.title}{" "}
                  {data?.card?.card?.itemCards?.length
                    ? `(${data?.card?.card?.itemCards?.length})`
                    : ""}
                </div>
                <div
                  className={`transition-transform duration-100 ${isActive ? "rotate-180" : "rotate-0"}`}
                >
                  <IoIosArrowDown />
                </div>
              </div>
              {isActive && (
                <div>
                  {data?.card?.card?.itemCards?.map(
                    (curElem, iterator, array) => {
                      return (
                        <SubDishMenu
                          key={curElem?.card?.info?.name}
                          info={curElem?.card?.info}
                          index={iterator === array.length - 1}
                        />
                      );
                    },
                  )}
                </div>
              )}
            </div>
          </div>
          {fontSize === 800 || index === true ? (
            <div
              className={`relative z-20 mb-7 h-4 border-b-16 border-[#02060c0d]`}
            ></div>
          ) : (
            hrLine
          )}
        </div>
      )}
    </>
  );
};
