import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);
  const myCart = {
    email: user?.email,
    name: details.name,
    brandName: details.brandName,
    type: details.type,
    image: details.image,
    price: details.price,
    rating: details.rating,
  };
  const handleAddToCart = () => {
    fetch(
      "https://assignment-10-server-klujmloxo-mamun-prodhans-projects.vercel.app/mycart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myCart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfull",
            text: "Successfully Added in Cart",
            icon: "success",
            button: "OK",
          });
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto mt-10 md:mt-16 lg:mt-20 flex gap-5 flex-col md:flex-row px-4 md:px-0">
      <div className="flex-1">
        <img className=" md:w-[80%]" src={details.image} alt="" />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-4">
          {details.name}
        </h2>
        <div className="text-base md:text-lg space-y-1 md:space-y-1.5">
          <p className="">
            <span className="font-bold">Description</span> :{" "}
            <span className="capitalize">{details.description}</span>
          </p>
          <p className="">
            <span className="font-bold">Brand</span> :{" "}
            <span className="capitalize">{details.brandName}</span>
          </p>
          <p className="">
            <span className="font-bold">Type</span> :{" "}
            <span className="capitalize">{details.type}</span>
          </p>
          <p className="">
            <span className="font-bold">Price</span> :{" "}
            <span className="capitalize"> ${details.price}</span>
          </p>
          <p className="">
            <span className="font-bold">Rating</span> :{" "}
            <span className="capitalize">{details.rating} stars</span>
          </p>
        </div>
        <button onClick={handleAddToCart} className="btn btn-primary mt-6">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
