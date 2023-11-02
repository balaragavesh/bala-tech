import React, { useContext } from "react";
import { LaptopContext } from "./context/Context";
import img1 from "../assets/img3.jpg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { isNavbar, setNavbar } = useContext(LaptopContext);
  return (
    <nav className="flex w-full z-20 items-center fixed top-0 left-0 bg-zinc-950 px-4 sm:px-5 md:px-6 py-4 justify-between ">
      <h1 className="text-slate-500 text-xl md:text-2xl font-bold font-Montserrat">
        <img src={img1} className="w-20" alt="" srcSet="" />
      </h1>

      <div className="md:hidden">
        <svg
          onClick={() => setNavbar((state) => !state)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-100 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        {isNavbar ? (
          <ul className="absolute top-0 left-0 bg-slate-800 z-10 rounded  h-[40vh] flex  flex-col justify-center px-10 text-gray-100">
            <Link to={"/"} className="p-2 font-Montserrat">
              Home
            </Link>
            <Link to={"/about"} className="p-2 font-Montserrat">
              About
            </Link>
            <Link to={"/services"} className="p-2 font-Montserrat">
              Services
            </Link>
            <Link to={"/laptop"} className="p-2 font-Montserrat">
              Laptops
            </Link>
          </ul>
        ) : (
          <></>
        )}
      </div>

      <ul className="hidden md:flex gap-5 font-Poppins cursor-pointer text-gray-100">
        <Link to={"/"} className="p-2 font-Montserrat">
          Home
        </Link>
        <Link to={"/about"} className="p-2 font-Montserrat">
          About
        </Link>
        <Link to={"/services"} className="p-2 font-Montserrat">
          Services
        </Link>
        <Link to={"/laptop"} className="p-2 font-Montserrat">
          Laptops
        </Link>
      </ul>
    </nav>
  );
}
