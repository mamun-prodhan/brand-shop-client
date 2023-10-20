import { useLoaderData, useParams } from "react-router-dom";
import BrandItem from "./BrandItem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BrandItems = () => {
  const { name } = useParams();
  const [loader, setLoader] = useState(true);
  const brandItems = useLoaderData();
  const [imageSlider, setImageSlider] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/imageslider/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setImageSlider(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2>
        Brand Items {name}: {brandItems.length}
      </h2>
      <div>
        <h2 className="text-4xl font-bold text-center">Image slider</h2>
        {loader && (
          <p className="text-2xl font-bold text-red-500 text-center my-5">
            Loading data
          </p>
        )}
        {/* {!loader && <></>} */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {brandItems.map((brandItem) => (
          <BrandItem key={brandItem._id} brandItem={brandItem}></BrandItem>
        ))}
      </div>
    </div>
  );
};

export default BrandItems;
