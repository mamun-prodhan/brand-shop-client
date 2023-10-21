import React from "react";
import image from "../../assets/png.png";
import { AiOutlineLaptop } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 px-4 md:px-10 lg:px-0">
      <div className="flex-1">
        <img src={image} alt="" />
      </div>
      <div className="flex-1">
        <div>
          <p className="mb-1 md:mb-3 font-bold text-base md:text-lg lg:text-xl tracking-[4px] text-[#FF6251]">
            Explore the latest arrivals
          </p>
          <h2 className="mb-0 md:mb-2 text-2xl md:text-4xl lg:text-5xl font-bold">
            Feel the best experience
          </h2>
          <h2 className="mb-3 md:mb-6 text-2xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#FF6251]">latest</span> laptops
          </h2>
          <p className="">
            Our latest gaming laptops are the most powerful, demanding and
            expensive product in the tech world. Your must experience the new
            gaming laptops in the market now.
          </p>
        </div>
        <div className="">
          <div className="flex gap-5 md:gap-10 items-start mt-8">
            <div className="bg-[#fad1cd] p-2 mt-2 border rounded-lg border-[#FF6251]">
              <AiOutlineLaptop className="text-3xl font-bold text-[#FF6251]"></AiOutlineLaptop>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Variety of Brands
              </h3>
              <p>
                We have the most popular brands products in our shop. We have
                the most popular brands.
              </p>
            </div>
          </div>
          <div className="flex gap-5 md:gap-10 items-start mt-8">
            <div className="bg-[#fad1cd] p-2 mt-2 border rounded-lg border-[#FF6251]">
              <MdSecurity className="text-3xl font-bold text-[#FF6251]"></MdSecurity>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl  font-semibold">
                Quality Product
              </h3>
              <p>
                The most popular brands products in our shop. We have the most
                popular brands products in our shop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
