import  { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { useAppSelector } from "@/redux/hook";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const cart = useAppSelector(state => state.cart.length);
  


  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Product Management", path: "/product-management" },
    { name: "About Us", path: "/about-us" },
  ];

  const navItemsSec = [
    {
      name: "Cart",
      path: "/cart",
      icon: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
    },
    {
      name: "Wishlist",
      path: "/wishlist",
      icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] w-full flex z-10 justify-between items-center h-24 mx-auto px-4">
      <Link to="/" className="flex items-center gap-2">
        <img className="max-w-9 lg:max-w-14 bg-white rounded-full" src={logo} alt="logo" />
        <h2 className="font-bold text-lg md:text-xl lg:text-3xl text-gray-700">
          Campers <span className="text-[#CB1836]">Shop</span>
        </h2>
      </Link>

      <ul className="hidden md:flex mx-auto text-center items-center justify-center">
        {navItems.map((item) => (
          <li key={item.name} className="p-4">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#CB1836] underline"
                  : "text-gray-800 hover:text-[#CB1836]"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex justify-end">
        {navItemsSec.map((item) => (
          <li key={item.name} className="p-4 flex items-center gap-1 flex-wrap">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-medium flex items-center ${
                  isActive
                    ? "text-[#CB1836]"
                    : "text-gray-800 hover:text-[#CB1836]"
                }`
              }
            >
              <p className="hidden md:block">{item.name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.icon}
                />
              </svg>
              {item.name === "Cart" && (
                <span className="mb-3 size-4  bg-[#CB1836] text-white rounded-full text-center text-xs">
                  {cart}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed z-10 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFFFF] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4"></h1>
        {navItems.map((item) => (
          <li key={item.name} className="p-4 border-b border-gray-800">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#CB1836] underline"
                  : "text-gray-800 hover:text-[#CB1836]"
              }
              onClick={handleNav}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        {navItemsSec.map((item) => (
          <li key={item.name} className="p-4 border-b border-gray-800">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#CB1836] underline"
                  : "text-gray-800 hover:text-[#CB1836]"
              }
              onClick={handleNav}
            >
              <div className="flex items-center gap-1">
                <p>{item.name}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
                {item.name === "Cart" && (
                  <span className="mb-3 size-4 bg-[#CB1836] text-white rounded-full text-center text-xs">
                    {cart}
                  </span>
                )}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
