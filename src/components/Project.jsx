import Topimg from "../image/IMG_2678-edited-1.jpg";

import React from "react";

const Project = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-96 md:h-full sm:h-500px">
          <img
            src={Topimg}
            alt="your browser does not support "
            className=" rounded-xl  mt-2 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 p-4 md:p-8 text-white font-bold text-lg md:text-2xl mt-12 md:mt-2 ">
            <h1 className="text-3xl md:mt-20 sm:text-6xl lg:text-4xl tracking-wide text-center">
              OUR{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                PROJECTS
              </span>
            </h1>

            <p className="mt-8 mx-5 text-lg sm:text-xl text-center text-neutral-300 max-w-4x ">
              Our elegant designs tell a story of individuality in the form of
              unique solutions that bring exhilarating experiences to the user
              and unique benefits to the project owner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

