import img1 from "../image/shine/shine1.JPG";
import img2 from "../image/shine/shine2.JPG";
import img3 from "../image/shine/shine3.JPG";
import img4 from "../image/shine/shine4.JPG";
import img5 from "../image/shine/shine5.JPG";
import shinevideo from "../video/shine.mp4";
import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Image } from "antd";

const slides = [
  {
    url: img3,
  },
  {
    url: img1,
  },
  {
    url: img4,
  },
  {
    url: img2,
  },
  {
    url: img5,
  },
];

const profile = [img3, img5, img4, img1];

const Shinesollon = () => {
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
              SHINE
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                SALOON
              </span>
            </h1>
            <p className="text-gray-700 text-lg  mt-5">INTERIOR - EXECUTION</p>
            <div className="md:w-1/2 grid grid-cols-1 mt-10 gap-10 grid-cols-2 md:gap-32 ml-0 sm:ml-1 md:ml-20">
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                <div className="w-full md:w-3/4 flex flex-col items-center transition-transform transform hover:scale-110">
                  <h3 className="font-semibold">LOCATION</h3>
                  <div className="flex mt-2">AMBUR</div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                <div className="w-full md:w-3/4 flex flex-col items-center transition-transform transform hover:scale-110">
                  <h3 className="font-semibold">YEAR</h3>
                  <div className="flex mt-2">2023</div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                <div className="w-full md:w-3/4 flex flex-col items-center transition-transform transform hover:scale-110">
                  <h3 className="font-semibold">CLIENT</h3>
                  <div
                    className="flex flex-row mt-2 p-0"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Mr R.D Saravanan
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                <div className="w-full md:w-3/4 flex flex-col items-center transition-transform transform hover:scale-110">
                  <h3 className="font-semibold">AREA</h3>
                  <div className="flex mt-2" style={{ whiteSpace: "nowrap" }}>
                    1300 SQ.FT
                  </div>
                </div>
              </div>
            </div>
                     
          </div>
        </div>
        <div className="text-center text-8xl ">
          <span className="bg-neutral-900 text-orange-500 text-xl rounded-full h-6   px-2 py-1 uppercase">
          SALOON
          </span>
          <p className="mt-8 text-lg  text-neutral-500 m-8 md:m-12 ">
            Introducing Shine, a beacon of beauty in Ambur, meticulously crafted
            by BTL architects and a team of skilled artisans. Our grand opening
            heralds a new chapter in beauty culture, where elegance meets
            expertise. From concept to creation, every detail at Shine promises
            an exceptional experience. Join us as we celebrate the fusion of
            artistry and innovation, setting new standards in beauty refinement.
            Discover the essence of Shine, where each visit is a celebration of
            confidence and grace.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 ml-20 mr-20 md:grid-cols-4 gap-4">
      {/* Left column */}
      <div className="md:col-span-1 md:w-full">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={profile[0]}
              alt="gallery-photo-0"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={profile[1]}
              alt="gallery-photo-1"
            />
          </div>
        </div>
      </div>
      
      {/* Video */}
      <div className="md:col-span-2 md:w-full">
        <video
          className=" w-[450px] h-[530px] item-center md:ml-32 rounded-lg object-cover object-center"
          controls
          autoPlay
          src={shinevideo}
        />
      </div>

      {/* Right column */}
      <div className="md:col-span-1 md:w-full">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={profile[2]}
              alt="gallery-photo-2"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={profile[3]}
              alt="gallery-photo-3"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Shinesollon;
