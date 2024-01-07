import React, { useEffect, useState } from "react";
import Section from "./Section";

export default function Blog() {
  const title1 = "Expertise";
  const title2 = "Customer satisfaction";
  const content1 = "Our journey in laptop sales and service spans a vast array of expertise and dedication. With years of immersion in the industry, we've cultivated an unparalleled understanding of laptops' intricacies, evolving trends, and customer needs. At the core of our service lies a dedication to personalized support, where every client receives tailored solutions and dependable assistance. Backed by years of industry experience, we guarantee top-notch products, transparent communication, and unwavering customer support.";
  const content2 = "Our commitment to customer satisfaction goes beyond mere transactions; it's an ongoing journey of understanding, exceeding expectations, and building lasting relationships. We take pride in offering personalized attention, ensuring that each client receives tailored solutions and unwavering support. From guiding customers through informed purchase decisions to swiftly resolving technical issues, we thrive on ensuring a seamless and gratifying experience. Our relentless pursuit of customer happiness drives us to provide transparent communication, reliable service, and a dedication to surpassing expectations.";
  const src1 = "src/assets/expert.jpg";
  const src2 = "src/assets/customer-satis.jpg";
  
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (counter <= 11) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000); // Change the interval timing as needed

      return () => clearInterval(interval); // Clear interval when component unmounts or counter reaches 10
    }
  }, [counter]); // Run effect whenever the counter changes

  return (
    <div>
      <div className="min-h-screen w-full flex justify-center items-center flex-col font-Poppins px-20 bg-gray-300 text-lg text-justify py-10">
        <h1 className="font-Montserrat text-5xl py-10 multicolor-text font-bold">Why choose us</h1>
        <div>
          <Section src={src1} content={content1} order={""} title={title1} />
          <Section src={src2} content={content2} order={"md:order-2"} title={title2} />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-64 overflow-hidden relative">
          <img src="src/assets/exp.jpg" alt="img" className="object-cover h-full w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <img src="src/assets/comp.png" alt="second-img" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24" />
        </div>

        {/* <div className="flex items-center justify-center">
          <div className="text-lg font-bold text-white" id="counting-number">{counter}</div>
        </div> */}
      </div>
    </div>
  );
}
