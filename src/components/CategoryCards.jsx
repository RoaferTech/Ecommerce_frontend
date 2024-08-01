import React from "react";
import image from "../assets/1.jpg";
import image2 from "../assets/2.jpg";

const CategoryCards = () => {
  return (
    <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row gap-5 pt-10 md:pt-16 lg:pt-20 overflow-hidden mb-16">
      <div className="relative w-full md:w-1/2 cursor-pointer overflow-hidden group">
        <img
          src={image}
          alt="Men Category"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-end p-8">
          <div className="text-right">
            <h4 className="uppercase text-[#FF4C3B] font-semibold lg:font-bold lg:text-lg">
              10% off
            </h4>
            <h2 className="uppercase text-2xl lg:text-5xl font-bold text-[#333333] leading-tight">
              Men
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 cursor-pointer overflow-hidden group">
        <img
          src={image2}
          alt="Women Category"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-end p-8">
          <div className="text-right">
            <h4 className="uppercase text-[#FF4C3B] font-semibold lg:font-bold lg:text-lg">
              10% off
            </h4>
            <h2 className="uppercase text-2xl lg:text-5xl font-bold text-[#333333] leading-tight">
              Women
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
