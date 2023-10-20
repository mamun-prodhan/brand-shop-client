import { Link } from "react-router-dom";

const BrandItem = ({ brandItem }) => {
  const { _id, name, brandName, image } = brandItem;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={`${name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{brandName}</p>
        <div className="card-actions">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandItem;
