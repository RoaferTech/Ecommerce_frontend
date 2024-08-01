import React from "react";
import { Carousel } from "flowbite-react";
import slider1 from "../assets/banner.jpg";
import slider2 from "../assets/banner2.jpg";

const images = {
  slider1,
  slider2,
};

const sliderContent = [
  {
    title: "Men Fashion",
    image: images.slider2,
  },
  {
    title: "Women Fashion",
    image: images.slider1,
  },
];

const BannerCarousel = () => {
  return (
    <div className="relative h-56 sm:h-64 lg:h-[calc(100vh-100px)] xl:h-[calc(100vh-100px)] 2xl:h-[calc(100vh-100px)]">
      <Carousel slide={true}>
        {sliderContent.map((item, index) => (
          <div
            className="flex h-full items-center bg-center bg-cover px-3 md:px-10 lg:px-16"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            key={index}
          >
            <div className="text-left md:text-left px-4 md:px-12 lg:px-20 max-w-[56rem] mx-auto lg:mx-0">
              <h2 className="text-center md:tracking-[0.4rem] font-semibold text-[#777] capitalize md:text-sm text-base lg:text-lg">
                Welcome to Fashion
              </h2>
              <h1 className="mt-2 text-center uppercase text-[28px] md:text-[36px] lg:text-[50px] xl:text-[60px] font-semibold tracking-normal text-[#404040]">
                {item.title}
              </h1>
              <div className="text-center  mt-4 font-[inter]">
                <button
                  className="px-6 py-3 text-white border-2 uppercase border-[#FF4C3B] transition-transform duration-300 transform hover:scale-105 hover:bg-white hover:text-black"
                  style={{
                    backgroundSize: "560px",
                    backgroundImage:
                      "linear-gradient(30deg, #FF4C3B 50%, transparent 50%)",
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
