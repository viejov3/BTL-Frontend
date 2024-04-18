import { Link } from "react-router-dom";
import saloon from "../image/saloon.jpg";
import step from "../image/the step.png";
import saj from "../image/saj.jpg";
import vs from "../image/vs .jpg";
import av from "../image/av saloon.jpg";

import React, { useState } from "react";

const Internav = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "ALL",
      content: [
        {
          imageUrl: saloon,
          heading: "SHINE SALOON",
          statement: "Introducing Shine, a beacon of beauty in Ambur.....",
          link: "/Shine",
        },
        {
          imageUrl: step,
          heading: "THE STEP",
          statement:
            "BTL Architects is thrilled to announce the successful completion...",
          link: "/Step",
        },
        {
          imageUrl: saj,
          heading: "SAAJ ",
          statement:
            "BTL Architects is overjoyed to announce the completion...",
          link: "/Saaj",
        },
        {
          imageUrl: vs,
          heading: "VS Residence",
          statement:
            "BTL Architects is currently working on the exquisite VS Residence",
          link: "/Vs",
        },
        {
          imageUrl: av,
          heading: "CURLSS SALOON",
          statement:
            "BTL Architects is currently working on the exquisite VS Residence",
          link: "",
        },
      ],
    },
    {
      id: 2,
      title: "ARCHITECTURE DESIGN",
      content: [
        {
          imageUrl: step,
          heading: "THE STEP",
          statement:
            "BTL Architects is overjoyed to announce the completion...",
          link: "/Step",
        },
        {
          imageUrl: vs,
          heading: "VS Residence",
          statement:
            "BTL Architects is currently working on the exquisite VS Residence",
          link: "/Vs",
        },
      ],
    },

    {
      id: 3,
      title: "INTERIOR DESIGN",
      content: [
        {
          imageUrl: saloon,
          heading: "SHINE SALOON",
          statement:
            "BTL Architects is overjoyed to announce the completion...",
          link: "/Shine",
        },
        {
          imageUrl: saj,
          heading: "SAAJ",
          statement:
            "BTL Architects is overjoyed to announce the completion...",
          link: "/Saaj",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl md:mx-auto   py-8">
      <div className="flex flex-wrap mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-5 py-2  backdrop-blur-lg flex justify-center items-center  rounded-lg mb-2 mr-2 ${
              activeTab === tab.id
                ? "text-white border-b-2 border-white transition-all duration-300 ease-in-out"
                : " text-gray-400"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="backdrop-blur-lg p-4 rounded-lg">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-2">
              {tab.content.map((item, index) => (
                <div key={index} className="flex flex-col ">
                  <Link to={item.link}>
                    <img
                      src={item.imageUrl}
                      alt="Random"
                      className="w-full h-auto object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95"
                    />
                  </Link>
                  <p className="text-2xl mt-2 uppercase ">{item.heading}</p>
                  <p className="text-neutral-500 mt-2">{item.statement}</p>
                  <Link to={item.link}>
                    <button className=" mt-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-800 hover:from-orange-400 hover:via-orange-500 hover:to-orange-800 text-white font-semibold py-1 px-2 rounded-md shadow-lg transform transition duration-300 hover:scale-105">
                      Read more
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internav;
