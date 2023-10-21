import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]/.test(password)) {
      setError("Don't have a special character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(name, photoURL)
          .then(() => {
            console.log("Profile Updated");
            setSuccess("Successfully Registered");
            Swal.fire({
              title: "Register Successfull",
              text: "You have registered successfully.",
              icon: "success",
              button: "OK",
            }).then(() => {
              navigate("/");
              setTimeout(() => {
                window.location.reload();
              }, 100);
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="px-4 md:px-0">
      <h2 className="text-4xl font-bold text-center mt-10">
        Please <span className="text-[#FF6251]">Register</span>
      </h2>
      <div className="md:w-1/2 mx-auto">
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          {error && <p className="text-red-400 font-bold my-4">{error}</p>}
          {success && (
            <p className="text-green-400 font-bold my-4">{success}</p>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="font-bold py-4">
          Already have an account ? Please{" "}
          <Link to="/login" className="text-[#FF6251]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
