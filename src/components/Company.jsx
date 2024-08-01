import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { companyData } from "../data/servics";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const CompanyCard = () => {
  return (
    <div className="max-w-[1260px] mx-auto py-[30px] md:py-[70px] ">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={false}
        arrows={false}
      >
        {companyData.map((company, index) => (
          <div key={index} className="p-4 flex justify-center">
            <img
              src={company.src}
              alt={company.alt}
              height={125}
              width={125}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CompanyCard;
