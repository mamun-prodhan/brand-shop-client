import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative mb-6 md:mb-14 lg:mb-20 z-[-1]">
      <img
        className=" w-full md:h-[400px] lg:h-[600px] object-cover"
        src={banner}
        alt="Banner"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 md:left-[30%] transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-white text-sm md:text-xl  text-center md:text-start tracking-[4px]">
          Quality is our Priority
        </p>
        <h2 className="my-2 md:my-4 text-white text-2xl md:text-5xl lg:text-6xl font-bold text-center md:text-start">
          Explore <span>Quality</span>
        </h2>
        <h2 className="my-2 md:my-4 text-white text-2xl md:text-5xl lg:text-6xl font-bold text-center md:text-start">
          And <span>Performance</span>
        </h2>
        <p className="text-white text-sm md:text-base  text-center md:text-start hidden md:block">
          Cutting-edge technology, high-performance devices, sleek <br />{" "}
          design, long-lasting battery life, advanced features, reliable
          electronics,
          <br /> seamless user experience, innovative engineering,advanced,
          powerful processors.
        </p>
        <button className="px-3 py-2 bg-[#ef4444] text-white  rounded-lg mt-6">
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
