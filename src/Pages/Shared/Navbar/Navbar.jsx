import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navlinks = (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="myCart">My Cart</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
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
    <div className="shadow-md w-full  top-0 left-0 bg-[#F2F2F2]">
      <div className="ms-4 md:ms-0 lg:flex justify-between items-center py-4 lg:px-20">
        <div className="relative flex items-center">
          <Link to="/">
            <img className="w-16 md:w-24" src={logo} alt="" />
          </Link>
          <Link to="/">
            <p className="text-xl font-bold text-[#F15E2D]">e-Shop</p>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute top-6 md:top-8 lg:top-4 right-5 text-2xl block lg:hidden z-20 "
        >
          {open ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <div
          className={`${
            open ? "top-4 md:top-2" : "top-[-500px]"
          } absolute lg:static  w-full lg:w-auto left-0 ps-4 lg:ps-0 pb-4 lg:pb-0  lg:flex items-center lg:space-x-10 bg-[#F2F2F2] duration-500 transition-all ease-in `}
        >
          <ul className="lg:flex items-center mt-4 lg:mt-0 space-y-1 lg:space-y-0 lg:space-x-10 font-semibold lg:z-auto z-[-1]">
            <li className="px-4 py-2 hover:text-white hover:bg-[#FF6251] rounded-md transition-all duration-300">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="px-4 py-2 hover:text-white hover:bg-[#FF6251] rounded-md transition-all duration-300">
              <NavLink to="/addProduct">Add Product</NavLink>
            </li>
            <li className="px-4 py-2 hover:text-white hover:bg-[#FF6251] rounded-md transition-all duration-300">
              <NavLink to="myCart">My Cart</NavLink>
            </li>
            {!user && (
              <>
                <li className="px-4 py-2 hover:text-white hover:bg-[#FF6251] rounded-md transition-all duration-300">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-white hover:bg-[#FF6251] rounded-md transition-all duration-300">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
          {user && (
            <div className=" ps-4 lg:ps-0 lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  className="h-8 w-8 rounded-full border-2"
                  src={user.photoURL}
                  alt=""
                />
                <p>{user.displayName}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 my-3 lg:my-0 font-bold bg-[#8f5cff] text-white hover:text-white hover:bg-[#FF6251] rounded-md transition-all duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
