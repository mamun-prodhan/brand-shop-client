import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

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
    fetch("http://localhost:5000/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Items added in cart successfully");
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold my-10">{details.name}</h2>
      <img src={details.image} alt="" />
      <button onClick={handleAddToCart} className="btn btn-primary mt-6">
        Add to Cart
      </button>
    </div>
  );
};

export default Details;
