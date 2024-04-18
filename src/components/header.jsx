import video1 from "../video/video 1.mp4"
import video2 from "../video/video 2.mp4"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
     
      <div className="flex flex-col items-center mt-6 lg:mt-16">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          BEYOND THE
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            LINES
          </span>
        </h1>
        <p className="mt-8 text-lg text-center text-neutral-500 max-w-4xl">
          "Welcome to Beyond the Lines, where architectural dreams take shape
          and boundaries are redefined. Our website offers a seamless platform
          for architects to explore their creativity, collaborate with peers,
          and bring visionary projects to life."
        </p>
        <div className="flex justify-center my-10">
          <Link to="/MyForm"
            className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
          >
            Start your dream project
            </Link>
        </div>
        <div className="flex justify-center m-2  md:m-10 gap-3  ">
          <video
            autoPlay
            loop
            muted
            className="rounder-lg w-1/2 border border-orange-700 shodow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4"/>
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounder-lg w-1/2  border border-orange-700 shodow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4"/>
          </video>
        </div>
      </div>
    </>
  );
};

export default Header;
