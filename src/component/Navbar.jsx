import React, { useContext } from "react";
import { LaptopContext } from "./context/Context";

export default function Navbar() {
  const { isNavbar, setNavbar } = useContext(LaptopContext);
  return (
    <nav className="flex relative items-center bg-slate-800 px-4 sm:px-5 md:px-6 py-4 justify-between ">
      <h1 className="text-slate-500 text-xl md:text-2xl font-bold font-Montserrat">
        Navbar
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
            <li className="p-2 font-Montserrat">Home</li>
            <li className="p-2 font-Montserrat">About</li>
            <li className="p-2 font-Montserrat">Services</li>
            <li className="p-2 font-Montserrat">Laptops</li>
          </ul>
        ) : (
          <></>
        )}
      </div>

      <ul className="hidden md:flex gap-5 font-Poppins cursor-pointer text-gray-100">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Laptops</li>
      </ul>
    </nav>
  );
}
