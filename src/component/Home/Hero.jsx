import React from "react";
import img from "../../assets/img1.jpg";
import LaptopList from "./LaptopList";
import Category from "../Category";
export default function Hero() {
  const img1 = "url('/src/assets/img1.jpg')";
  console.log(img);
  return (
    <>
      <div
        className="w-full md:bg-fixed bg-center bg-cover bg-no-repeat flex justify-center items-center h-[50vh] md:min-h-screen "
        style={{ backgroundImage: img1 }}
      >
        <h1 className="text-center text-white font-Montserrat font-bold text-3xl md:text-5xl lg:text-8xl ">
          Explore Refurbished Laptops
        </h1>
      </div>
      <div className="flex">
        <Category />
        <LaptopList />
      </div>
    </>
  );
}
