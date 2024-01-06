import React from "react";
import Section from "./Section";

export default function Blog() {
  const title1 = "Expertise";
  const title2 = "Customer satisfaction";
  const content1 =
    "Our journey in laptop sales and service spans a vast array of expertise and dedication. With years of immersion in the industry, we've cultivated an unparalleled understanding of laptops' intricacies, evolving trends, and customer needs.At the core of our service lies a dedication to personalized support, where every client receives tailored solutions and dependable assistance. Backed by years of industry experience, we guarantee top-notch products, transparent communication, and unwavering customer support";
  const content2 =
    "Our commitment to customer satisfaction goes beyond mere transactions; it's an ongoing journey of understanding, exceeding expectations, and building lasting relationships. We take pride in offering personalized attention, ensuring that each client receives tailored solutions and unwavering support.From guiding customers through informed purchase decisions to swiftly resolving technical issues, we thrive on ensuring a seamless and gratifying experience. Our relentless pursuit of customer happiness drives us to provide transparent communication, reliable service, and a dedication to surpassing expectations.";
  const src1 =
    "src/assets/expert.jpg";
  const src2 =
    "src/assets/customer-satis.jpg";

  return (
    <div>
      <div className="min-h-screen w-full flex justify-center items-center flex-col font-Poppins px-20 bg-gray-300 text-lg text-justify">
        <h1 className="font-Montserrat text-5xl py-10 multicolor-text font-bold">Why choose us</h1>
        <div>
          <Section src={src1} content={content1} order={""} title={title1} />
          <Section src={src2} content={content2} order={"md:order-2"} title={title2} />
        </div>
      </div>
      <div className="w-full bg-black">
        <p>Something</p>

      </div>
    </div>
  );
}
