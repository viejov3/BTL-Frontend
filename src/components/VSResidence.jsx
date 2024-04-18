import img1 from "../image/vs/3.jpg";
import img2 from "../image/vs/PLAN-Model01_page-0001.jpg";
import img3 from "../image/vs/PLAN-Model02_page-0001.jpg";


import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Image } from "antd";

const slides = [
  {
    url: img2,
  },
  {
    url: img1,
  },
  {
    url: img3,
  }

]

const profile = [img1, img2, img3];

const VS = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className=" items-center mt-0  ">
        <div className="gap-20 p-8 rounded-lg shadow-lg flex flex-col sm:flex-row ">
          <div className="sm:w-2/3 ">
            <div className="max-w-[3000px] h-[400px] md:h-[600px]  py-2 px-4 relative group">
              <div
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                  maxWidth: "100%",
                  transition: "background-image 0.5s ease-in-out",
                }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div
                className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer"
                onClick={prevSlide}
              >
                <BsChevronCompactLeft size={30} />
              </div>
              {/* Right Arrow */}
              <div
                className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer"
                onClick={nextSlide}
              >
                <BsChevronCompactRight size={30} />
              </div>
              <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`text-2xl cursor-pointer ${
                      currentIndex === slideIndex
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 mt-5">
            <h1 className="text-3xl sm:text-5xl md:mt-10  lg:text-6xl tracking-wide">
            VS 
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                RESIDENCE
              </span>
            </h1>
            <p className="text-gray-700 text-lg  mt-5">ARCHITECTURE - EXECUTION</p>
            <div className="md:w-1/2 grid grid-cols-1 mt-10 gap-10 grid-cols-2 md:gap-32 ml-0 sm:ml-1 md:ml-20">
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                <div className="w-full md:w-3/4 flex flex-col items-center transition-transform transform hover:scale-110">
                  <h3 className="font-semibold">LOCATION</h3>
                  <div className="flex mt-2 " style={{ whiteSpace: "nowrap" }}>
                  DHARMAPURI
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                <div className="w-full md:w-3/4 flex flex-col items-center transition-transform transform hover:scale-110">
                  <h3 className="font-semibold">YEAR</h3>
                  <div className="flex mt-2">2024</div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                <div className="w-full md:w-3/4 flex flex-col items-center transition-transform transform hover:scale-110">
                  <h3 className="font-semibold">CLIENT</h3>
                  <div
                    className="flex flex-row mt-2 p-0"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    MR VIJAY AND MS SARALA 
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                <div className="w-full md:w-3/4 flex flex-col items-center transition-transform transform hover:scale-110">
                  <h3 className="font-semibold">AREA</h3>
                  <div className="flex mt-2" style={{ whiteSpace: "nowrap" }}>
                    2100 SQ.FT
                  </div>
                </div>
              </div>
            </div>
                     
          </div>
        </div>
        <div className="text-center text-8xl ">
          <span className="bg-neutral-900 text-orange-500 text-xl rounded-full h-6   px-2 py-1 uppercase">
          RESEIDENCE 
          </span>
          <p className="mt-8 text-lg  text-neutral-500 m-8 md:m-12 ">
          BTL Architects is currently working on the 
exquisite VS Residence project, where 
we're creating a stunning atrium that 
serves as the focal point, seamlessly 
connecting to the serene pooja space. 
The design embodies the essence of 
tranquility, with golden sun rays streaming 
into the heart of the building, creating a 
divine ambiance. Our team is 
dedicated to crafting spaces that evoke a 
sense of beauty and spirituality
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 ml-20 mr-20 md:grid-cols-3 gap-4">
      {/* Left column */}
      <div className="md:w-full">
        <div className=" flex gap-4">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={profile[1]}
            alt="gallery-photo-0"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={profile[0]}
            alt="gallery-photo-1"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={profile[2]}
            alt="gallery-photo-2"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default VS;
