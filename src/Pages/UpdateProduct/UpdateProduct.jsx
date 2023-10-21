import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const _id = loadedProduct._id;
  console.log("product id", _id);
  console.log(loadedProduct);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const brandItems = {
      name,
      brandName,
      type,
      image,
      description,
      price,
      rating,
    };
    console.log(brandItems);
    fetch(
      `https://assignment-10-server-klujmloxo-mamun-prodhans-projects.vercel.app/update/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(brandItems),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">
        Update Product page
      </h2>
      <div className="md:w-1/2 mx-auto">
        <form onSubmit={handleAddProduct}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              defaultValue={loadedProduct?.name}
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Brand Name</span>
            </label>
            <select
              name="brandName"
              id="brandName"
              defaultValue={loadedProduct?.brandName}
              className="select select-bordered"
            >
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="lenovo">Lenovo</option>
              <option value="msi">MSI</option>
              <option value="dell">DELL</option>
              <option value="asus">Asus</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Type</span>
            </label>
            <select
              name="type"
              id="type"
              defaultValue={loadedProduct?.type}
              className="select select-bordered"
            >
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
              <option value="headphone">Headphone</option>
              <option value="tablet">Tablet</option>
              <option value="smartWatch">Smart Watch</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="image"
              name="image"
              className="input input-bordered"
              defaultValue={loadedProduct?.image}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="input input-bordered"
              defaultValue={loadedProduct?.description}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              name="price"
              className="input input-bordered"
              defaultValue={loadedProduct?.price}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <select
              name="rating"
              id="rating"
              defaultValue={loadedProduct?.rating}
              className="select select-bordered"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
