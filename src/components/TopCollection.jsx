import React from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { topCollection } from "../data/data";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TopCollection = () => {
  return (
    <div className="max-w-[1260px] mx-auto pb-12">
      <h5 className="text-[#FF4C3B] capitalize pb-2 text-lg tracking-widest text-center">
        Special Offer
      </h5>
      <h2 className="text-4xl uppercase font-bold tracking-wider pb-2 text-center">
        Top Collection
      </h2>
      <div className="border-[3px] border-[#FF4C3B] w-24 mx-auto mb-2"></div>
      <p className="max-w-[700px] mx-auto pt-4 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        customTransition="all .5s"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={false}
        dotListClass="custom-dot-list-style"
        arrows={false}
      >
        {topCollection.map((product, index) => (
          <div key={index} className="p-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopCollection;
