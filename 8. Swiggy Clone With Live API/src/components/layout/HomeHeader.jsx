import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router";

export default function HomeHeader() {
  return (
    <>
      <header className="bg-[#FD5200]">
        {/* Navigation Menu */}
        <nav className="container mx-auto flex max-w-[80%] items-center justify-between py-8">
          <div>
            <a target="_blank" href="#">
              <img
                className="h-12 w-40"
                src="src/assets/images/swiggy_logo_white.avif"
                alt="Swiggy Logo"
              />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-8 text-[16px] font-bold text-white">
              <li>Swiggy Corporate</li>
              <li>Partner with us</li>
              <li className="flex items-start justify-center gap-2 rounded-xl border border-white px-4 py-3">
                Get the App
                <span className="rotate-[-45deg]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    aria-label="rating-up-down-icon"
                    aria-hidden="false"
                    strokecolor="#FFFFFF"
                    fillcolor="#FFFFFF"
                  >
                    <path
                      d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z"
                      fill="#FFFFFF"
                      fillOpacity="0.92"
                    ></path>
                  </svg>
                </span>
              </li>
              <li className="rounded-xl bg-black px-4 py-3 font-extrabold">
                <a target="_blank" href="#" className="px-7 py-[2.8px]">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Part */}
        <div className="relative pt-16 pb-8">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt="left_img"
            className="absolute top-0 left-0 h-[450px] w-[250px]"
          />
          <div className="container mx-auto max-w-[60%] text-center text-[52px] leading-14 font-bold text-white">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </div>
          <div className="container mx-auto mt-6 flex max-w-[65%] items-center">
            <div className="flex w-[45%] items-center gap-2 rounded-xl bg-white px-4">
              <IoLocationSharp className="text-3xl text-[#ff5200]" />
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="w-full py-4 text-lg outline-0"
              />
              <IoIosArrowDown className="text-4xl" />
            </div>
            <div className="ml-4 flex w-[70%] items-center rounded-xl bg-white px-4">
              <input
                type="text"
                placeholder="Search for restaurant, item or more"
                className="w-full py-4 text-lg outline-0 placeholder:text-neutral-600"
              />
              <IoIosSearch className="text-2xl opacity-60" />
            </div>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
              alt="right_img"
              className="absolute top-0 right-0 h-[450px] w-[250px]"
            />
          </div>
        </div>

        {/* Card's Part */}
        <div className="container mx-auto flex max-w-[80%] items-center justify-center">
          <div>
            <NavLink to="/restaurants">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
                alt="Food Delivery"
                className="h-[319px] w-[346px]"
              />
            </NavLink>
          </div>
          <div>
            <NavLink to="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
                alt="Instamart"
                className="h-[319px] w-[346px]"
              />
            </NavLink>
          </div>
          <div>
            <NavLink to="https://www.swiggy.com/dineout">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
                alt="Dineout"
                className="h-[319px] w-[346px]"
              />
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
