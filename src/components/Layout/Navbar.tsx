"use client";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setClick] = useState(false);

  const ToggleNav = () => {
    setClick(!isClick);
  };

  return (
    <div>
      <div className="bg-[#1A0B2E] text-white">
        <div
          className=" container flex justify-between py-7
          max-sm:py-7 max-sm:px-12"
        >
          <div className="flex">
            <div className="text-[35px] font-semibold">HK</div>
            <div className="leading-[15px] pt-3 font-serif">
              <p>Full Stack</p>
              <p>Web Developer</p>
            </div>
          </div>

          <div className=" pt-4 gap-8  hidden md:flex  font-serif  ">
            <p className="cursor-pointer" >Home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Projects</p>
            <p className="cursor-pointer">Contact</p>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
                   hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
              onClick={ToggleNav}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isClick && (
          <div className="md:hidden text-white bg-black  ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <p className="text-white hover:bg-white hover:text-black rounded-lg p-2 cursor-pointer">
                Home
              </p>
              <p className="text-white hover:bg-white hover:text-black rounded-lg p-2  cursor-pointer">
                About
              </p>
              <p className="text-white hover:bg-white hover:text-black rounded-lg p-2  cursor-pointer">
                Projects
              </p>
              <p className="text-white hover:bg-white hover:text-black rounded-lg p-2  cursor-pointer">
                Contact
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
