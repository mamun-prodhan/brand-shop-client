import { Link } from "react-router-dom";

const BrandItem = ({ brandItem }) => {
  const { _id, type, rating, price, name, brandName, image } = brandItem;
  return (
    <div className="card bg-base-100 border shadow-xl">
      <figure>
        <img className="h-56" src={image} alt={`${name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex items-center justify-end font-semibold">
          <p className="">
            Brand : <span className="capitalize">{brandName}</span>
          </p>
          <p className=" text-end">
            Type : <span className="capitalize">{type}</span>
          </p>
        </div>
        <div className="flex items-center justify-end font-semibold">
          <p className="">
            Price : <span className="uppercase">$ {price}</span>
          </p>
          <p className=" text-end">
            Rating : <span>{rating} Stars</span>
          </p>
        </div>

        <div className="card-actions mt-2">
          <Link className="me-3 w-full" to={`/details/${_id}`}>
            <button className="btn btn-primary w-full">Details</button>
          </Link>
          <Link className="me-3 w-full" to={`/update/${_id}`}>
            <button className="btn btn-primary w-full">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandItem;
