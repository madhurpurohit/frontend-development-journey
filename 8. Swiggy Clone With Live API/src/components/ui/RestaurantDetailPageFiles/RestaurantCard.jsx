export const RestaurantsCard = ({ item }) => {
  return (
    <>
      <div className="w-81 overflow-hidden rounded-xl border border-[#02060c14] shadow-[0px_0px_7.905px_rgba(27,30,36,0.08)]">
        <a href={item?.cta?.link} target="_blank">
          <div className="relative">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                item?.info?.mediaFiles[0]?.url
              }
              alt={item?.info?.name}
              className="h-[189px] w-full object-cover"
            />
            <div className="absolute bottom-0 flex h-[50px] w-full items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-3 pt-4 pb-3 font-bold text-white">
              <p className="text-xl">{item?.info?.name}</p>
              <div className="mask flex items-start gap-[1px] mask-b-from-neutral-800 mask-b-to-neutral-500 text-xl">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8.00005"
                    cy="7.99999"
                    r="7.2"
                    fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"
                  ></circle>
                  <path
                    d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z"
                    fill="white"
                  ></path>
                  <defs>
                    <linearGradient
                      id="StoreRating16_svg__paint0_linear_32982_71565"
                      x1="8.00005"
                      y1="0.799988"
                      x2="8.00005"
                      y2="15.2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#21973B"></stop>
                      <stop offset="1" stopColor="#128540"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-[16px]">{item?.info?.rating?.value}</p>
              </div>
            </div>
          </div>
          <div className="px-3 pt-2 pb-3">
            <div className="flex items-center justify-between text-[13px]">
              <div className="flex items-center gap-1">
                {item?.info?.cuisines?.map((data, index) => {
                  if (index === 0) {
                    return <span key={item?.info?.id}>{data}</span>;
                  } else {
                    return (
                      <div key={data} className="flex items-center gap-1">
                        <div className="relative bottom-0.5 h-1 w-1 rounded-full bg-neutral-600"></div>
                        <div>{data}</div>
                      </div>
                    );
                  }
                })}
              </div>
              <p>{item?.info?.costForTwo}</p>
            </div>
            <div className="flex items-center justify-between text-[13px]">
              <p>
                {item?.info?.locality}, {item?.info?.locationInfo?.city?.name}
              </p>
              <p>{item?.info?.locationInfo?.distanceString}</p>
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              {item?.info?.vendorOffer?.offerHighlights?.map((data) => {
                return (
                  <span
                    key={data?.logoCtx?.text}
                    className="flex items-center gap-0.5 rounded-xl bg-[#F0F0F5] px-2 py-0.5 font-medium text-[#686B70]"
                  >
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                        data?.logoCtx?.logo
                      }
                      alt={data?.logoCtx?.text}
                      className="h-3.5 w-3.5"
                    />{" "}
                    <span className="text-[13px]">{data?.logoCtx?.text}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
