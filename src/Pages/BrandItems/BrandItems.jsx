import { useLoaderData, useParams } from "react-router-dom";
import BrandItem from "./BrandItem";
import { useEffect, useState } from "react";
// image slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";

const BrandItems = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  const { name } = useParams();
  const [loader, setLoader] = useState(true);
  const brandItems = useLoaderData();
  const [imageSlider, setImageSlider] = useState([]);
  console.log(imageSlider);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-klujmloxo-mamun-prodhans-projects.vercel.app/imageslider/${name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImageSlider(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="mt-10">
        {/* image slider */}
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img className="max-w-7xl" src={imageSlider.image1} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img className="max-w-7xl" src={imageSlider.image2} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img className="max-w-7xl" src={imageSlider.image3} alt="" />
          </div>
        </div>
        {/* image slider */}
        {loader && (
          <p className="text-2xl font-bold text-red-500 text-center my-5">
            Loading data
          </p>
        )}
        {/* {!loader && <></>} */}
      </div>
      <h2 className="text-center font-bold mt-10 text-2xl md:text-3xl lg:text-4xl">
        Popular Brand <span className="capitalize text-[#FF6251]">{name}</span>
      </h2>
      {brandItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 md:mt-16">
          {brandItems.map((brandItem) => (
            <BrandItem key={brandItem._id} brandItem={brandItem}></BrandItem>
          ))}
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-center my-40 text-red-600">
          No Product Availabe
        </h2>
      )}
    </div>
  );
};

export default BrandItems;
