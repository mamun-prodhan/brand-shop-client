import Banner from "./Banner";
import Brands from "./Brands";
import { useLoaderData } from "react-router-dom";
import Customer from "./Customer";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div>
          <h2 className="text-xl md:text-4xl font-bold text-center">
            Our Popular <span className="text-[#FF6251]">Brands</span>
          </h2>
          <p className=" text-sm md:text-base my-1 md:my-3 text-center md:tracking-[4px]  md:font-semibold ">
            Explore the top technology brands and their performance in our
            platform
          </p>
          <hr className="h-0.5 md:h-1 w-20 md:w-40 mt-2 md:mt-0 bg-[#FF6251] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {brands.map((brand) => (
            <Brands key={brand._id} brand={brand}></Brands>
          ))}
        </div>
      </div>
      <Customer></Customer>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
<h2>This is Home</h2>;
