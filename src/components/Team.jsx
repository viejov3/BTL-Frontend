import React from "react";
import karthi from "../image/karthi.jpg";
import nithish from "../image/av nithish.jpg";
import ELESH from "../image/ELESH 12.jpg";
import ar from "../image/ar.jpg";
import KAUSHIK from "../image/KAUSHIK .jpg";
import hari from "../image/hari.jpg";
import askash from "../image/akASH.JPG";
import Kishore from "../image/KISHORE KUMAR.JPG";
import NITHISH from "../image/NITHISH.JPG";
import Krishna from "../image/krishna.jpg";

// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Mails } from "lucide-react";

const Team = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-3xl lg:text-4xl text-center mt-10 ">
        OUR
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          TEAM
        </span>
      </h1>
      <p className="mt-8 text-lg text-center text-neutral-500 md:mr-40 md:ml-40">
        Meet our dedicated team of visionary architects and designers, driven by
        creativity and expertise, committed to turning your dreams into
        architectural masterpieces
      </p>
      <div className="container py-16 px-4 md:px-10 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={karthi} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.karhi keyan</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  Conceptual Visualizer
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={nithish} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.AV Nithish</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  Interior Designer
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={ELESH} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.Elesh</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  IGBC AP
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={KAUSHIK} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.Kaushik</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  Computational Designer
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={hari} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.Hari</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                Executive Manager
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={askash} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.Askash</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  Sustainable Architect
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={NITHISH} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.R Nithish</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  BIM Architect
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={Kishore} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.Kishore Kumar</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  Project Manager
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={Krishna} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar.Krishna</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  Spatial Planner
                </h4>
              </div>
            </div>
          </div>

          <div className="showdow-lg rounded-lg relative overflow-hidden group">
            <img className="rounded-lg" src={ar} alt="profile" />
            <div className="absolute bg-black rounded-lg bg-opacity-75 -translate-x-full top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ar. Jeba Atshai</h3>
                <h4 className="text-lg font-normal mb-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                  Facade Designer
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
