import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-300 flex items-center">
      <div className="flex w-full flex-col md:flex-row items-center justify-between gap-12 py-40">

        {/* left section */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy And Sell Your Books 
            <span className="text-blue-700">
                for the Best Prices
            </span>
          </h2>

          <p className="md:w-4/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            omnis molestias incidunt libero voluptate accusamus amet et,
            corrupti rem, consequatur veniam dolorum, unde odio cupiditate
            voluptas velit optio quo eius?
          </p>

          <div>
            <input
              type="search"
              name="search"
              placeholder="Search for books"
              className="py-2 px-2 rounded-sm"
            />

            <button className="bg-blue-700 text-white px-6 py-2 rounded-sm hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* right section */}
        <div>
            <BannerCard />
        </div>

      </div>
    </div>
  );
};

export default Banner;
