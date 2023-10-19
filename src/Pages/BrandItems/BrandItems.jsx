import React from "react";
import { useParams } from "react-router-dom";

const BrandItems = () => {
  const { name } = useParams();
  return (
    <div>
      <h2>Brand Items {name}</h2>
    </div>
  );
};

export default BrandItems;
