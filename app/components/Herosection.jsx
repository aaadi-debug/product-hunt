"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Flag, ChevronUp } from "lucide-react";

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 py-5">
        <img src="/assets/images/pink_lips.avif" alt="pink-lips" className="" />

        <div className="flex flex-row max-sm:flex-row justify-start items-start mt-4">
          <h2 className="text-xl sm:text-2xl font-bold max-sm:mr-20">
            VideoDubber - Fast <br /> Video Translator
          </h2>

          <div className="relative mt-4 sm:mt-0 sm:ml-20" ref={dropdownRef}>
            <ChevronDown
              size={20}
              className="text-slate-400 font-bold cursor-pointer mt-5 max-sm: mt-2"
              onClick={toggleDropdown}
            />
            {isOpen && (
              <div className="absolute -left-20 border p-2 rounded w-[200px] shadow-md bg-white max-sm:-left-48">
                <div className="border p-2 rounded flex justify-center items-center cursor-pointer bg-white">
                  <Flag size={16} className="text-slate-400" /> &nbsp;
                  <div className="text-xs font-semibold bg-white">Flag</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-3">
          <p className="text-lg sm:text-2xl text-slate-500 font-extralight sm:w-[340px]">
            Translate videos in your own voice, globalize in a click!
          </p>

          <div className="relative group mt-4 sm:mt-0 sm:ml-5">
            <a
              href="#"
              className="flex justify-center items-center w-full sm:w-[100px] border py-5 text-sm rounded hover:border-orange-300"
            >
              Visit
              <ChevronDown
                size={20}
                className="text-slate-400 font-bold ml-2"
              />
            </a>
            <div className="absolute left-0 sm:-left-12 shadow-lg hidden group-hover:block mt-2 border rounded w-full sm:w-[230px] shadow-md bg-white">
              <div className="p-2 hover:bg-slate-100 rounded">
                <a href="#" className="text-sm text-slate-500">
                  <span className="text-slate-600 text-base font-medium">
                    Website
                  </span>{" "}
                  videodubber.ai
                </a>
              </div>
              <div className="p-2 hover:bg-slate-100 rounded">
                <a href="#" className="text-sm text-slate-500">
                  <span className="text-slate-600 text-base font-medium">
                    Learn More
                  </span>{" "}
                  videodubber.ai
                </a>
              </div>
              <div className="p-2 hover:bg-slate-100 rounded">
                <a href="#" className="text-sm text-slate-500">
                  <span className="text-slate-600 text-base font-medium">
                    Learn More
                  </span>{" "}
                  videodubber.ai
                </a>
              </div>
              <div className="p-2 hover:bg-slate-100 rounded">
                <a href="#" className="text-sm text-slate-500">
                  <span className="text-slate-600 text-base font-medium">
                    Learn More
                  </span>{" "}
                  videodubber.ai
                </a>
              </div>
              <div className="p-2 hover:bg-slate-100 rounded">
                <a href="#" className="text-sm text-slate-500">
                  <span className="text-slate-600 text-base font-medium">
                    Learn More
                  </span>{" "}
                  videodubber.ai
                </a>
              </div>
            </div>
          </div>

          <div className="group mt-4 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex justify-center items-center w-full sm:w-[190px] border py-5 text-base text-white bg-orange-400 rounded hover:border-orange-300 
                   group-hover:bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transition-all duration-300"
            >
              <ChevronUp
                size={20}
                className="text-slate-400 text-white font-bold mr-3"
              />
              UPVOTE 158
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
