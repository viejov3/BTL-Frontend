import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import about from "../image/about.png";
import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <>
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About us
        </span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/1">
          <div className="max-w-screen-lg mx-auto md:mx-10 ml-5 mr-5">
            <h1 className="text-3xl mt-5">We Do</h1>
            <ul className="text-xl mt-5 ml-10">
              <Link to="/MainProject">
                <li className="flex gap-2 items-center hover:text-orange-500 hover:scale-110 transition-transform duration-300">
                  <HiOutlineArrowNarrowRight />
                  OUR PROJECT
                </li>
              </Link>
              <Link to="/Team">
                <li className="flex gap-2 items-center mt-5 hover:text-orange-500  hover:scale-110  transition-transform duration-300">
                  <HiOutlineArrowNarrowRight />
                  OUR TEAM
                </li>
              </Link>
              <Link to="/Firm">
                <li className="flex gap-2 items-center mt-5 hover:text-orange-500  hover:scale-110  transition-transform duration-300">
                  <HiOutlineArrowNarrowRight />
                  OUR FIRM
                </li>
              </Link>
            </ul>
            <div className="mt-6 lg:mt-12">
              <p className="opacity-80 text-2xl">
                Our process and approach towards each project is equally rigorous
                as well as comprehensive.
              </p>
              <p className="mt-4 opacity-50">
                BTL was established in 2018 by a team of self-motivated people
                empowered to act with a purpose. The purpose was to set up a
                design practice that has a process-oriented approach to design. We
                strive to achieve the client’s goals through the process of
                research.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block">
          <div className="flex justify-center mt-10 md:mt-0">
            <img src={about} alt="img" className="w-96 backdrop-blur-lg rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
