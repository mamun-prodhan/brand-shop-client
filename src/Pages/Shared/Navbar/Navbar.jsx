import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="myCart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-md w-full  top-0 left-0 bg-indigo-400">
      <div className="ms-4 md:ms-0 md:flex justify-between items-center py-4 md:px-20">
        <div className="relative">
          <img src={logo} alt="" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute top-4 right-5 text-2xl block md:hidden "
        >
          {open ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <div
          className={`${
            open ? "top-14" : "top-[-500px]"
          } absolute md:static w-full md:w-auto left-0 ps-4 md:ps-0 pb-4 md:pb-0  md:flex items-center md:space-x-10 bg-indigo-400 duration-500 transition-all ease-in `}
        >
          <ul className="md:flex items-center mt-4 md:mt-0 space-y-1 md:space-y-0 md:space-x-10 text-lg font-semibold md:z-auto z-[-1]">
            {navlinks}
          </ul>
          <div
            onClick={handleSignOut}
            className="text-lg font-semibold cursor-pointer"
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
