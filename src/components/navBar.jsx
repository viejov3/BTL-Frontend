import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import lg from "../image/logo.png";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";



const navItems = [
  { label: "HOME", href: "/" },
  { label: "OUR PROJECTS", href: "/MainProject" },
  { label: "OUR TEAM", href: "/Team" },
  { label: "OUR FIRM", href: "/Firm" },
  { label: "CONTACT US", href: "/MyForm" },
];

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
             <Link to="/"> <img className="h-12  mr-2" src={lg} alt="Logo" /></Link>
              {/* <span className="text-xl tracking-light mr-20 ">BTL</span> */}
            </div>
            <ul className="hidden lg:flex ml-14 space-x-16">
              {navItems.map((item, index) => (
                <li key={index} className="hover:text-orange-400">
                  <Link to={item.href} onClick={closeNavbar}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-2 items-center">
              <ul className="flex flex-wrap">
                <Link to="https://www.instagram.com/btl_architects?igsh=eTYxMHowMGdwY3Fp" className="inlineBlock mx-3 ">
                  <li className=" flex  h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full hover:bg-orange-600 hover:text-white rounded-lg">
                    <i className="">
                      <FaInstagram size={28} />
                    </i>
                  </li>
                </Link>
                <Link
                  to="https://www.youtube.com/@BTL777/shorts"
                  className="inlineBlock mx-3"
                >
                  <li className="flex  h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full hover:bg-orange-600 hover:text-white rounded-lg">
                    <i>
                      <FaYoutube size={28} />{" "}
                    </i>
                  </li>
                </Link>
                <Link to="http://Wa.me/+919566013727" className="inlineBlock mx-3">
                  <li className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full hover:bg-orange-600 hover:text-white rounded-lg">
                    <i>
                      <FaWhatsapp size={28} />
                    </i>
                  </li>
                </Link>
               
              </ul>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 backdrop-blur-lg bg-black w-full p-10 flex flex-col justify-center items-center lg:hidden">
              <ul className="">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <Link to={item.href} onClick={closeNavbar}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-8 mt-3">
              <ul className="flex flex-wrap">
                <Link to="https://www.instagram.com/btl_architects?igsh=eTYxMHowMGdwY3Fp" className="inlineBlock mx-3 ">
                  <li className=" flex  h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full hover:bg-orange-600 hover:text-white rounded-lg">
                    <i className="">
                      <FaInstagram size={28} />
                    </i>
                  </li>
                </Link>
                <Link
                  to="https://www.youtube.com/@BTL777/shorts"
                  className="inlineBlock mx-3"
                >
                  <li className="flex  h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full hover:bg-orange-600 hover:text-white rounded-lg">
                    <i>
                      <FaYoutube size={28} />{" "}
                    </i>
                  </li>
                </Link>
                <Link to="http://Wa.me/+919566013727" className="inlineBlock mx-3">
                  <li className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full hover:bg-orange-600 hover:text-white rounded-lg">
                    <i>
                      <FaWhatsapp size={28} />
                    </i>
                  </li>
                </Link>
                
              </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
