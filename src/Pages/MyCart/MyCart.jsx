import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import Swal from "sweetalert2";

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
          Swal.fire({
            title: "Successfull",
            text: "Successfully Deleted",
            icon: "success",
            button: "OK",
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <h2 className="text-2xl my-10 md:text-4xl font-bold text-center">
        My Cart Products
      </h2>
      {filteredCart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {filteredCart.map((singleCart) => (
            <MyCartCard
              key={singleCart._id}
              singleCart={singleCart}
              handleDelete={handleDelete}
            ></MyCartCard>
          ))}
        </div>
      ) : (
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-red-500 text-center">
          Empty !!! No Products Added
        </h2>
      )}
    </div>
  );
};

export default MyCart;
