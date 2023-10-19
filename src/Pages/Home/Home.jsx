import Banner from "./Banner";
import Brands from "./Brands";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <h2>All Brands : {brands.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand) => (
            <Brands key={brand._id} brand={brand}></Brands>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
<h2>This is Home</h2>;
