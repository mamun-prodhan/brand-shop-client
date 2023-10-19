import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Logged in successfull");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-5xl font-semibold text-center mt-10">Please Login</h2>
      <div className="md:w-1/2 mx-auto">
        <form onSubmit={handleRegister}>
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="font-bold py-4">
          Dont have an account ? Please
          <Link to="/register" className="text-blue-600 ms-2">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
