import { useDispatch, useSelector } from "react-redux";
import { nonVegIcon, vegIcon } from "../assets/icons";
import { CartHeader } from "../components/layout/CartHeader";
import { decrementItem, incrementItem } from "../context/cartSlice";

export const Checkout = () => {
  const items = useSelector((state) => state.cartSlice.item);
  const dispatch = useDispatch();

  function handleIncrement(data) {
    dispatch(incrementItem(data));
  }
  function handleDecrement(data) {
    dispatch(decrementItem(data));
  }

  return (
    <>
      <CartHeader />
      {items.length === 0 ? (
        <div className="flex h-[calc(100vh-64px)] w-full justify-center bg-[#E9ECEE] p-4 text-3xl font-semibold capitalize sm:p-9">
          ohh no!! you haven't add any item yet, please add item to buy.
        </div>
      ) : (
        <div className="flex h-[calc(100vh-64px)] w-full items-center justify-center bg-[#E9ECEE] p-4 sm:p-9">
          <div className="container mx-auto flex h-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="flex-grow overflow-y-auto p-4 sm:p-8">
              <div className="flex flex-col gap-6">
                {items?.map((curElem) => {
                  return (
                    <div
                      key={curElem.id}
                      className="flex w-full items-center gap-4 border-b pb-4 last:border-b-0 sm:flex-row"
                    >
                      <div className="flex w-full flex-1 items-center gap-3 sm:w-auto">
                        <div className="h-5 w-5 flex-shrink-0">
                          {curElem.isVeg ? vegIcon : nonVegIcon}
                        </div>
                        <div className="text-base font-bold sm:text-lg">
                          {curElem.name}
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-between gap-4 sm:w-auto">
                        <div className="w-32">
                          <div className="relative flex w-full justify-between rounded-lg border border-[#02060c26] bg-white px-4 py-1.5 text-center text-lg font-bold text-[#1ba672] shadow-[rgba(40,44,63,0.08)_0px_3px_8px] transition-colors duration-200">
                            <button
                              onClick={() => handleDecrement(curElem)}
                              className="cursor-pointer font-semibold"
                            >
                              {" "}
                              -{" "}
                            </button>
                            <span>{curElem.quantity}</span>
                            <button
                              onClick={() => handleIncrement(curElem)}
                              className="cursor-pointer font-semibold"
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </div>
                        <div className="w-24 text-right text-base font-semibold tracking-wider sm:text-lg">
                          &#8377;{" "}
                          {((curElem.defaultPrice ?? curElem.price) / 100) *
                            curElem.quantity}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
