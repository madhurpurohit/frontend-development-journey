export default function Header() {
    return (
        <>
            <header className="bg-[#ff5200] font-Gilroy">
                <div className="navigation-header flex justify-between items-center py-8  container mx-auto">
                    <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" />
                    
                    <div className="navbar font-extrabold text-white text-base flex gap-10 items-center">
                        <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                        <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner With Us</a>
                        <a href="" className="border border-white py-3 px-5 rounded-xl" target="_blank">Get the App</a>
                        <a href="" className="border border-black bg-black py-3 px-6 rounded-xl" target="_blank">Sign in</a>
                    </div>
                </div>

                <div className="middle-part pt-16 pb-8 relative">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Food Image" className="absolute top-0 left-0 w-60 h-110" />
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="Food Image" className="absolute top-0 right-0 w-60 h-110"/>

                    <div className="text-5xl/14 text-white font-extrabold max-w-[60%] container mx-auto text-center">Order food & groceries. Discover best restaurants. Swiggy it!</div>

                    <div className="max-w-[60%] container mx-auto text-center flex gap-5 mt-5 text-lg">
                        <input type="text" placeholder="Enter your delivery location" value="Delhi, India" className="bg-white w-[40%] text-gray-800 px-5 py-3 rounded-xl outline-none"/>
                        <input type="text" placeholder="Search for restaurant, item or more" className="bg-white w-[55%] px-5 py-3 rounded-xl outline-none"/>
                    </div>
                </div>

                <div className="last-part max-w-[80%] container mx-auto flex items-center justify-center">
                    <div>
                        <a href="https://www.swiggy.com/restaurants" target="_blank">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="First Image" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" target="_blank">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png" alt="Second Image" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.swiggy.com/dineout" target="_blank">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" alt="Third Image" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.swiggy.com/genie" target="_blank">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" alt="Fourth Image" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}