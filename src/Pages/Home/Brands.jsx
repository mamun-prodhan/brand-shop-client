import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  const { brandName, image } = brand;
  return (
    <Link to={`/brand/${brandName}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-4 md:px-10 pt-4 md:pt-10">
          <img src={image} alt={`${brandName}`} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title uppercase">{brandName}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Brands;
