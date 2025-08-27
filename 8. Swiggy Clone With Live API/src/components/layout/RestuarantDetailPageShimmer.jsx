export const RestaurantInfoShimmer = () => {
  return (
    <div className="container mx-auto mt-5 max-w-[800px] bg-white">
      <div className="animate-pulse">
        {/* Restaurant Name Placeholder */}
        <div className="my-[18px] ml-4 h-9 w-1/2 rounded-md bg-gray-300"></div>

        {/* Main Info Card Container */}
        <div className="w-full rounded-br-[36px] rounded-bl-[36px] bg-gradient-to-t from-gray-300 via-gray-100 to-transparent p-4">
          <div className="w-full rounded-[20px] bg-white p-4">
            {/* Rating, Cost, etc. Placeholder */}
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-gray-300"></div>
              <div className="h-5 w-1/3 rounded-md bg-gray-300"></div>
            </div>

            {/* Cuisines Placeholder */}
            <div className="my-3 h-4 w-3/4 rounded-md bg-gray-300"></div>

            {/* Outlet and Delivery Time Placeholder */}
            <div className="flex w-full">
              {/* Vertical line graphic placeholder */}
              <div className="flex flex-col items-center pt-[5px]">
                <div className="h-[7px] w-[7px] rounded-full bg-gray-300"></div>
                <div className="h-[23px] w-[1px] bg-gray-300"></div>
                <div className="h-[7px] w-[7px] rounded-full bg-gray-300"></div>
              </div>
              {/* Text placeholders */}
              <div className="ml-3 flex w-full flex-col gap-3 pr-4">
                <div className="h-4 w-1/2 rounded-md bg-gray-300"></div>
                <div className="h-4 w-1/3 rounded-md bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// This is a single shimmer card for the deals slider.
const ShimmerDealCard = () => {
  return (
    <div className="flex w-[300px] rounded-[20px] border border-gray-200 p-3">
      {/* Image Placeholder */}
      <div className="h-12 w-12 flex-shrink-0 rounded-md bg-gray-300"></div>
      <div className="ml-3 flex w-full flex-col gap-2">
        {/* Header Text Placeholder */}
        <div className="h-6 w-full rounded-md bg-gray-300"></div>
        {/* Coupon Code Placeholder */}
        <div className="h-4 w-3/4 rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
};

export const DealsForYouShimmer = () => {
  const shimmerItems = Array.from({ length: 4 });

  return (
    <div className="container mx-auto mt-5 max-w-[800px]">
      <div className="animate-pulse">
        {/* Header: Title and Arrow Placeholders */}
        <div className="mt-10 mb-8 flex w-full items-center justify-between">
          <div className="h-8 w-1/4 rounded-md bg-gray-300"></div>
          <div className="flex gap-4 px-4">
            <div className="h-7 w-7 rounded-full bg-gray-300"></div>
            <div className="h-7 w-7 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Slider Items Placeholder */}
        <div className="flex space-x-[30px] overflow-hidden">
          {shimmerItems.map((_, index) => (
            <ShimmerDealCard key={index} />
          ))}
        </div>

        {/* Menu Separator Placeholder */}
        <div className="pt-8 pb-4">
          <div className="mx-auto h-4 w-24 rounded-md bg-gray-300"></div>
        </div>

        {/* HR Line Placeholder */}
        <div className="container mx-auto mt-1 mb-8 max-w-[96%]">
          <div className="h-[1px] w-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export const TopPicksShimmer = () => {
  const shimmerItems = Array.from({ length: 4 });

  return (
    <div className="my-8">
      <div className="animate-pulse">
        {/* Header: Title aur Arrow buttons ke placeholders */}
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="h-8 w-1/3 rounded-md bg-gray-300"></div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div className="flex space-x-6 overflow-hidden">
          {shimmerItems.map((_, index) => (
            <div className="w-64 flex-shrink-0 md:w-72" key={index}>
              <div className="relative">
                {/* Responsive Image Placeholder */}
                {/* Yeh screen size ke hisaab se apni height badlega */}
                <div className="h-40 w-full rounded-2xl bg-gray-300 sm:h-48 md:h-56 lg:h-64"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-20 mt-6 h-4 border-b-[16px] border-[#f0f0f5]"></div>
    </div>
  );
};

// Shimmer component for one dish only.
const DishItemShimmer = () => {
  return (
    <div className="flex items-start justify-between border-b border-gray-200 py-6">
      {/* Left side: Dish details */}
      <div className="flex w-3/4 flex-col gap-2 pr-4">
        {/* Veg/Non-veg icon placeholder */}
        <div className="h-4 w-4 rounded bg-gray-300"></div>
        {/* Dish Name placeholder */}
        <div className="h-5 w-1/2 rounded-md bg-gray-300"></div>
        {/* Price placeholder */}
        <div className="h-4 w-1/4 rounded-md bg-gray-300"></div>
        {/* Rating placeholder */}
        <div className="mt-1 h-4 w-1/3 rounded-md bg-gray-300"></div>
        {/* Description placeholder */}
        <div className="mt-2 h-3 w-full rounded-md bg-gray-300"></div>
        <div className="h-3 w-5/6 rounded-md bg-gray-300"></div>
      </div>

      {/* Right side: Image and Add Button */}
      <div className="flex flex-shrink-0 flex-col items-center gap-2">
        {/* Image placeholder */}
        <div className="h-28 w-32 rounded-lg bg-gray-300"></div>
        {/* Add Button placeholder */}
        <div className="-mt-4 h-9 w-24 rounded-lg bg-gray-300 shadow-md"></div>
      </div>
    </div>
  );
};

// Shimmer component for one category like Recommended (20).
const DishCategoryShimmer = () => {
  const shimmerItems = Array.from({ length: 10 });

  return (
    <div>
      {/* Category Title placeholder */}
      <div className="mb-4 h-7 w-48 rounded-md bg-gray-300"></div>

      {/* Dish items list */}
      <div>
        {shimmerItems.map((_, index) => (
          <DishItemShimmer key={index} />
        ))}
      </div>
    </div>
  );
};

export const RestDishesDetailsShimmer = () => {
  return (
    <div className="mx-4 mb-4">
      <div className="animate-pulse">
        <DishCategoryShimmer />
        <div className="relative z-20 mt-6 h-4 border-b-[16px] border-[#f0f0f5]"></div>

        <div className="mt-8">
          <DishCategoryShimmer />
        </div>
        <div className="relative z-20 mt-6 h-4 border-b-[16px] border-[#f0f0f5]"></div>

        <div className="mt-8">
          <DishCategoryShimmer />
        </div>
        <div className="relative z-20 mt-6 h-4 border-b-[16px] border-[#f0f0f5]"></div>
      </div>
    </div>
  );
};
