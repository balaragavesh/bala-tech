import React from "react";

export default function About() {
  return (
    <div className="flex justify-center  flex-col px-10 md:px-20 bg-gray-300 py-20">
      <h1 className=" multicolor-text font-Montserrat text-6xl md:text-6xl font-bold  text-left py-2">
        About Bala Technologies
      </h1>
      <div className="flex font-medium">
        <div className="w-2/3">
          <p className="text-black font-Poppins text-lg md:text-xl  mt-10 " >
            Welcome to our laptop sales and service website, dedicated to meeting the technology needs of Madurai, Tamil Nadu! 
            As a premier destination for all things related to laptops, we take immense pride in catering to our customers' diverse requirements with top-notch products and exceptional service.
          </p>
          <p className="text-black font-Poppins text-lg  md:text-xl  mt-10 ">
            We understand the pivotal role that laptops play in today's fast-paced world.
            Whether you're a student, a professional, or an entrepreneur, we aim to be your go-to hub for all your laptop needs in Madurai.
          </p>
          <p className="text-black font-Poppins text-lg md:text-xl  mt-10 ">
            We strive to provide a comprehensive service experience. 
            With a passion for technology and a customer-centric approach, we are dedicated to assisting you in finding the perfect laptop that aligns with your specific needs and preferences.
          </p>
        </div>
        <div className="flex justify-end w-1/3 h-1/3 ">
          <img src="src/assets/img3.jpg" alt="Image Description" className="w-full md:w-3/4 " />
        </div>
      </div>
    </div>
  );
}
