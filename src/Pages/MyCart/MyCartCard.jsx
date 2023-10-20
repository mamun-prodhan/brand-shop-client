const MyCartCard = ({ singleCart, handleDelete }) => {
  const { _id, name, brandName, image, price, rating, type } = singleCart;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-40" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brandName}</p>
          <div className="card-actions">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
