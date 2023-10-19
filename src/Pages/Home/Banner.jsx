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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-white text-xl md:text-3xl lg:text-4xl text-center">
          The Biggest
        </h2>
        <h2 className="my-2 md:my-4 text-white text-2xl md:text-5xl lg:text-6xl font-bold text-center">
          Event Planner
        </h2>
        <p className="text-white text-sm md:text-xl  text-center tracking-[4px]">
          Every Event Should be perfect
        </p>
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
