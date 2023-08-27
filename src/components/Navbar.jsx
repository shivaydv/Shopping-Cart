import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { cartItems } = useCartContext();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="flex z-20 bg-blue-100 shadow-sm sticky top-0  container mx-auto text-black  items-center justify-between max-md:px-6 w-full py-2">
      <section className="flex items-center gap-12 ">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="max-md:self-start" />
        </Link>
        <div className="gap-8 flex max-md:hidden">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <Link to="/products" className="font-semibold">
            Products
          </Link>
        </div>
      </section>
      <div className="gap-8 flex hidden">
        <Link to="/" className="font-semibold">
          Home
        </Link>
        <Link to="/products" className="font-semibold">
          Products
        </Link>
      </div>
      <section className="flex gap-2 items-center">
      {isAuthenticated ? (
        <div className="flex gap-2 items-center">
            <button className=" bg-black text-white hover:scale-105 rounded-lg px-1 py-1 text-xs  ease-in-out duration-100" onClick={()=>logout()}>Log Out</button>
            <img src={user.picture} alt="Profile" className="w-8 h-8 object-cover rounded-full" />
            <h1 className="font-semibold max-md:hidden">{user.name}</h1>
          </div>
        ) : (
          <button className="bg-black text-white hover:scale-105 rounded-lg p-2 ease-in-out duration-100" onClick={() => loginWithRedirect()}>Log In</button>
        )}
        <Link to={"/cart"}>
          <div className="relative cursor-pointer ">
            <AiOutlineShoppingCart size={28} />
            <p
              className={`${
                cartItems.length === 0 ? "hidden" : "absolute"
              }  text-white bottom-0 right-0 bg-red-600 w-4 h-4 translate-x-1 translate-y-1 text-sm md:pb-[2px]  flex justify-center items-center rounded-full`}
            >
              {cartItems.length}
            </p>
          </div>
        </Link>
        
      </section>
    </nav>
  );
};

export default Navbar;
