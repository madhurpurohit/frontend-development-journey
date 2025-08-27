export const HeaderShimmerEffect = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 animate-pulse items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-md bg-gray-300"></div>
            <div className="hidden items-center gap-2 lg:flex">
              <div className="h-5 w-32 rounded bg-gray-300"></div>
            </div>
          </div>

          <nav>
            <ul className="hidden items-center gap-8 lg:flex">
              <li className="h-5 w-32 rounded bg-gray-300"></li>
              <li className="h-5 w-20 rounded bg-gray-300"></li>
              <li className="h-5 w-24 rounded bg-gray-300"></li>
              <li className="h-5 w-16 rounded bg-gray-300"></li>
              <li className="h-5 w-20 rounded bg-gray-300"></li>
              <li className="h-8 w-12 rounded bg-gray-300"></li>
            </ul>
          </nav>

          <div className="lg:hidden">
            <div className="h-6 w-6 rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const SliderCardShimmer = () => {
  // We'll create a few placeholder items to simulate the slider view
  const shimmerItems = Array.from({ length: 6 });

  return (
    <div className="container mx-auto my-12 max-w-[76%]">
      <div className="animate-pulse">
        {/* Header: Title and Arrow Placeholders */}
        <div className="mb-8 flex w-full items-center justify-between">
          {/* Title Placeholder */}
          <div className="h-8 w-1/4 rounded-md bg-gray-300"></div>

          {/* Arrow Buttons Placeholder */}
          <div className="flex gap-4 px-4">
            <div className="h-7 w-7 rounded-full bg-gray-300"></div>
            <div className="h-7 w-7 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Slider Items Placeholder */}
        <div className="flex space-x-[30px] overflow-hidden">
          {shimmerItems.map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="flex w-[144px] flex-col items-center justify-center">
                {/* Image Placeholder */}
                <div className="h-[180px] w-full rounded-lg bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// This is a single shimmer card that mimics the layout of one restaurant item.
const ShimmerRestaurantCard = () => {
  return (
    <div className="flex w-60 flex-col gap-3">
      {/* Image Placeholder */}
      <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gray-300"></div>

      <div className="flex flex-col gap-2">
        {/* Title Placeholder */}
        <div className="h-6 w-3/4 rounded-md bg-gray-300"></div>
        {/* Rating and Time Placeholder */}
        <div className="h-5 w-1/2 rounded-md bg-gray-300"></div>
        {/* Cuisines Placeholder */}
        <div className="h-4 w-full rounded-md bg-gray-300"></div>
        {/* Area Name Placeholder */}
        <div className="h-4 w-2/3 rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
};

export const RestaurantPageCardShimmer = () => {
  // Create an array to map over for generating multiple shimmer cards
  const shimmerItems = Array.from({ length: 12 });

  return (
    <div className="container mx-auto my-12 max-w-[80%]">
      <div className="animate-pulse">
        <div className="mb-10 h-8 w-1/3 rounded-md bg-gray-300"></div>

        {/* Grid for Shimmer Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {shimmerItems.map((_, index) => (
            <ShimmerRestaurantCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// A helper component to create a list of shimmer links, avoiding repetition.
const ShimmerLinkList = ({ titleWidth = "w-24", linkCount = 4 }) => {
  const links = Array.from({ length: linkCount });
  return (
    <div className="mb-8">
      {/* Title Placeholder */}
      <div className={`h-6 ${titleWidth} mb-4 rounded-md bg-gray-300`}></div>
      <ul className="space-y-3">
        {links.map((_, index) => (
          <li key={index} className="h-4 w-3/4 rounded-md bg-gray-300"></li>
        ))}
      </ul>
    </div>
  );
};

export const FooterShimmer = () => {
  return (
    <footer className="bg-[#f0f0f5] py-16">
      <div className="container mx-auto max-w-[76%]">
        <div className="animate-pulse">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Column 1: Logo and Copyright */}
            <div className="md:col-span-1">
              <div className="mb-2 h-12 w-40 rounded-lg bg-gray-300"></div>
              <div className="h-4 w-32 rounded-md bg-gray-300"></div>
            </div>

            {/* Column 2: Company Links */}
            <div>
              <ShimmerLinkList titleWidth="w-24" linkCount={4} />
            </div>

            {/* Column 3: Contact and Legal Links */}
            <div>
              <ShimmerLinkList titleWidth="w-28" linkCount={3} />
              <ShimmerLinkList titleWidth="w-16" linkCount={5} />
            </div>

            {/* Column 4: Available In */}
            <div>
              <ShimmerLinkList titleWidth="w-32" linkCount={6} />
              <div className="h-9 w-32 rounded-md bg-gray-300"></div>
            </div>

            {/* Column 5: Life at Swiggy and Social */}
            <div>
              <ShimmerLinkList titleWidth="w-36" linkCount={4} />
              <div>
                <div className="mb-4 h-6 w-28 rounded-md bg-gray-300"></div>
                <div className="flex space-x-4">
                  <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                  <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                  <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                  <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* HR Placeholder */}
          <div className="h-px bg-gray-300"></div>

          <div className="flex flex-col items-center justify-between pt-8 md:flex-row">
            <div className="mb-4 h-6 w-2/5 rounded-md bg-gray-300 md:mb-0"></div>
            <div className="flex space-x-4">
              <div className="h-12 w-36 rounded-lg bg-gray-300"></div>
              <div className="h-12 w-36 rounded-lg bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
