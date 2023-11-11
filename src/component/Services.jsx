import React from "react";

export default function Services() {
  const serviceData = [
    {
      title: "Service 1",
      description: "lorem ispum sit amet, consectetur adipiscing elit",
      feature: ["feature 1", "feature 2", "feature 3"],
    },
    {
      title: "Service 1",
      description: "lorem ispum sit amet, consectetur adipiscing elit",
      feature: ["feature 1", "feature 2", "feature 3"],
    },
    {
      title: "Service 1",
      description: "lorem ispum sit amet, consectetur adipiscing elit",
      feature: ["feature 1", "feature 2", "feature 3"],
    },
  ];
  console.log(serviceData);

  return (
    <div className="py-20 w-full min-h-screen bg-zinc-800 text-gray-100">
      <h2 className="mt-10 font-Montserrat font-bold text-5xl text-center">
        Our Services
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 my-10">
        {serviceData.map((item, index) => (
          <div key={index} className="font-Poppins  bg-zinc-700 p-5 rounded">
            <h4 className="text-3xl">{item.title}</h4>
            <p>{item.description}</p>

            <ul className="list-disc px-10">
              {item.feature.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="md:mx-20">
        <h2 className="font-Montserrat text-xl font-medium text-gray-300">
          Why Choose Our Service?
        </h2>

        <ul className="font-Montserrat space-y-5 py-5">
          <li>
            <strong>Expertise:</strong> Our team consists of seasoned
            professionals with a proven track record in [industry/niche].
          </li>
          <li>
            <strong>Custom Solutions:</strong> We understand that every client
            is unique, and we tailor our services to meet your specific
            requirements.
          </li>
          <li>
            <strong>Client Satisfaction:</strong> Our priority is your
            satisfaction. We work closely with you to ensure our services exceed
            your expectations.
          </li>
          <li>
            <strong>Innovation:</strong> We stay ahead of industry trends to
            bring you the latest and most effective solutions.
          </li>
        </ul>

        <a href="#" className="font-Poppins bg-zinc-900 px-4 py-2 rounded">
          Contact Us
        </a>
      </div>
    </div>
  );
}
