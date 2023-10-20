import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  const { user, loading } = useContext(AuthContext);
  const loadedCartData = useLoaderData();
  const [myCart, setMyCart] = useState(loadedCartData);
  console.log("before filter", myCart);

  const filteredCart = myCart.filter(
    (cartData) => cartData.email === user?.email
  );
  console.log("after filter", filteredCart);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/mycart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = myCart.filter((cartData) => cartData._id !== _id);
          console.log("remaining cart data", remaining);
          setMyCart(remaining);
          alert("Deleted Successfully");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center">My Cart page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
        {filteredCart.map((singleCart) => (
          <MyCartCard
            key={singleCart._id}
            singleCart={singleCart}
            handleDelete={handleDelete}
          ></MyCartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
