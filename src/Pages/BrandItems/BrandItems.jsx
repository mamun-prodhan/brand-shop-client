import { useLoaderData, useParams } from "react-router-dom";
import BrandItem from "./BrandItem";

const BrandItems = () => {
  const { name } = useParams();
  const brandItems = useLoaderData();
  console.log(brandItems);
  return (
    <div className="max-w-7xl mx-auto">
      <h2>
        Brand Items {name}: {brandItems.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {brandItems.map((brandItem) => (
          <BrandItem key={brandItem._id} brandItem={brandItem}></BrandItem>
        ))}
      </div>
    </div>
  );
};

export default BrandItems;
