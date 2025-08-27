import { useDispatch, useSelector } from "react-redux";
import { hrLine, nonVegIcon, vegIcon } from "../../../assets/icons";
import {
  addItem,
  decrementItem,
  incrementItem,
} from "../../../context/cartSlice";

const starIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    fillcolor="#116649"
  >
    <rect width="14" height="14" fill="white"></rect>
    <path
      d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
      fill="#116649"
    ></path>
  </svg>
);

export const SubDishMenu = ({ info, index }) => {
  //   console.log(info);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartSlice.item);
  // console.log(items);

  const element = items?.find((curElem) => curElem?.id === info?.id);
  let count = element?.quantity ?? 0;

  function handleAddItem() {
    dispatch(addItem(info));
  }
  function handleIncrement() {
    dispatch(incrementItem(info));
  }
  function handleDecrement() {
    dispatch(decrementItem(info));
  }

  return (
    <>
      <div className="flex justify-between max-sm:flex-col-reverse max-sm:items-center">
        <div className="flex w-full flex-col max-sm:items-center">
          <div className="mb-1 h-4 w-4">
            {info?.isVeg ? vegIcon : nonVegIcon}
          </div>
          <div className="text-lg font-bold">{info?.name}</div>
          <div className="max-sm:flex max-sm:items-baseline max-sm:gap-2" >
            <div className="mt-1 text-base font-semibold">
              &#8377; {Number(info?.price ?? info?.defaultPrice ?? 0) / 100}
            </div>
            {info?.ratings?.aggregatedRating?.rating && (
              <div className="mt-3 flex text-[13px]">
                {starIcon}
                <div className="ml-0.5 font-semibold text-[#116649]">
                  {info?.ratings?.aggregatedRating?.rating}
                </div>
                <div className="ml-0.5">
                  ({info?.ratings?.aggregatedRating?.ratingCountV2})
                </div>
              </div>
            )}
          </div>
          <div className="line-clamp-2 h-[54px] break-all text-ellipsis">
            <div className="mt-3 h-[42px]">{info?.description}</div>
          </div>
        </div>
        <div className="ml-15 max-sm:ml-3">
          <div className="relative w-39 overflow-hidden rounded-xl">
            {info?.imageId ? (
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  info?.imageId
                }
                alt={info?.name}
                className="h-36 w-39 rounded-xl object-cover"
              />
            ) : (
              <div className="h-25 w-39 rounded-xl object-cover"></div>
            )}
            <div className="relative z-10 flex h-15 w-full -translate-y-1/2 justify-center">
              <div className="absolute flex flex-col items-center justify-center">
                {count === 0 ? (
                  <button
                    className="relative -bottom-1 w-30 cursor-pointer rounded-lg border border-[#02060c26] bg-white py-1.5 text-center text-lg font-bold text-[#1ba672] shadow-[rgba(40,44,63,0.08)_0px_3px_8px] transition-colors duration-200 hover:bg-neutral-50/97"
                    onClick={handleAddItem}
                  >
                    ADD
                  </button>
                ) : (
                  <div>
                    <button className="relative -bottom-1 flex w-30 cursor-pointer justify-between rounded-lg border border-[#02060c26] bg-white px-7 py-1.5 text-center text-lg font-bold text-[#1ba672] shadow-[rgba(40,44,63,0.08)_0px_3px_8px] transition-colors duration-200 hover:bg-neutral-50/97">
                      <div onClick={handleDecrement}>-</div>
                      <div>{count}</div>
                      <div onClick={handleIncrement}>+</div>
                    </button>
                  </div>
                )}
                <div className="mt-1.5 text-[13px] font-extralight">
                  Customizable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {index ? "" : hrLine}
    </>
  );
};
