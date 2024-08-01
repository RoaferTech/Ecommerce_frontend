import React from "react";
import { services } from "../data/servics";

const ServicesComponent = () => {
  return (
    <div className="services xl:max-w-[1260px] mx-auto py-8 border-y-2 border-solid border-[#ddd]">
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center xl:w-[360px] gap-3 p-6 border-none md:border-r-[1px] md:border-[#ddd] hover:text-[#FF4C3B] transition-colors duration-300"
          >
            <img
              src={service.imgSrc}
              alt="service"
              className="w-[60px] hover:scale-110 transition-transform duration-500"
            />
            <div className="text-center md:text-left">
              <h4 className="text-base font-semibold lg:font-bold uppercase tracking-widest">
                {service.title}
              </h4>
              <p className="text-[#777] capitalize text-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
