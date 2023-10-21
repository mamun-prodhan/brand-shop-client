const MyCartCard = ({ singleCart, handleDelete }) => {
  const { _id, name, brandName, image, price, rating, type } = singleCart;

  return (
    <div className="flex gap-5 flex-col md:flex-row border p-6 rounded-xl shadow-xl">
      <div className="flex-1">
        <img className="md:w-[70%] rounded-xl" src={image} alt="Album" />
      </div>
      <div className="flex-1 space-y-1.5">
        <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
        <p className="capitalize">Brand: {brandName}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="">
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
