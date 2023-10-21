import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative mb-6 md:mb-14 lg:mb-20 z-[-1]">
      <img
        className=" w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
        src={banner}
        alt="Banner"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-[33%] md:left-[36%] lg:left-[30%] transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-white text-xs md:text-base lg:text-xl text-start tracking-[4px]">
          Quality is our Priority
        </p>
        <h2 className="my-0 md:my-2 lg:my-4 text-white text-2xl md:text-4xl lg:text-6xl font-bold text-start">
          Explore <span className="text-[#FF6251]">Quality</span>
        </h2>
        <h2 className="my-0 md:my-2 lg:my-4 text-white text-2xl md:text-4xl lg:text-6xl font-bold text-start">
          And <span className="text-[#FF6251]">Performance</span>
        </h2>
        <p className="text-white text-xs md:text-base hidden text-start md:block">
          Cutting-edge technology, high-performance devices, sleek <br />{" "}
          design, long-lasting battery life, advanced features, reliable
          electronics.
        </p>
        <button className="px-4 md:px-8 lg:px-14 py-2 md:py-3 lg:py-5 bg-[#F15E2D] text-[#FFFFFF] border border-[#F15E2D] hover:text-[#F15E2D] hover:bg-[#FFF] duration-300 text-xs  md:text-base font-bold mt-4 md:mt-6 rounded-md">
          Explore Now
        </button>

        {/* <div className="text-center mt-10 font-bold">
            <button className="px-6 py-2 me-4 rounded-3xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              About Us
            </button>
            <button className="px-6 py-2 rounded-3xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Get Started
            </button>
          </div> */}
      </div>
    </div>
  );
};

export default Banner;
