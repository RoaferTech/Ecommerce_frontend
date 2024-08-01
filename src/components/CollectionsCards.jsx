import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { collectionData } from "../data/blog";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
const CollectionsCards = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      arrows={false}
    >
      {collectionData.map((card, index) => (
        <div key={index} className="card p-2">
          <img
            src={card.imgSrc}
            alt="card image"
            className="w-full h-auto object-cover"
          />
          <div className="px-4 py-6 text-center">
            <h4 className="mt-5 text-[#FF4C3B] text-lg font-normal capitalize">
              {card.date}
            </h4>
            <p className="mt-2 text-base font-bold text-[#222] uppercase">
              {card.description}
            </p>
            <hr className="my-2 w-[75px] bg-[#FF4C3B] mx-auto h-[2px]" />
            <h6 className="text-sm text-[#777] font-normal tracking-widest">
              by: {card.author}, {card.comments} Comment
            </h6>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CollectionsCards;
