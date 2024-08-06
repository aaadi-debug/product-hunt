"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Flag,
  ChevronUp,
  Gift,
  MessageSquare,
  Dot,
  Share,
  ChartNoAxesColumnIncreasing,
  Bookmark,
} from "lucide-react";

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
              className="text-slate-400 font-bold cursor-pointer mt-5 max-sm:mt-2"
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

        <div className="flex flex-row max-sm:flex-col mt-10 mb-5">
          <div className="flex">
            <div className="flex justify-start align-middle text-orange-500">
              <Gift size={22} />
              <span className="font-normal ml-2">2 months free manually</span>
            </div>
            <div className="flex justify-start align-middle text-slate-500">
              <Dot />
              <span>Free Options</span>
            </div>
          </div>

          <div className="flex ml-8 max-sm:ml-0 max-sm:mt-4">
            <div className="flex justify-start align-middle text-slate-500 text-sm mr-2">
              <MessageSquare size={18} />
              <span className="ml-2">Dicuss</span>
            </div>
            <div className="flex justify-start align-middle  text-slate-500 text-sm mr-2">
              <Bookmark size={18} />
              <span className="ml-2">Collect</span>
            </div>
            <div className="flex justify-start align-middle  text-slate-500 text-sm mr-2">
              <Share size={18} />
              <span className="ml-2">Share</span>
            </div>
            <div className="flex justify-start align-middle  text-slate-500 text-sm mr-2">
              <ChartNoAxesColumnIncreasing size={18} />
              <span className="ml-2">Stats</span>
            </div>
          </div>
        </div>

        <p className="text-base pr-28 font-light text-black max-sm:pr-0">Translate video in one click with AI to 150+ languages & accents in original voice. Prime features: 1. 0.1 USD/min for premium video translation with voice cloning 2. Unlimited Editing 3. Exports MP4/SRT/MP3</p>

        <div className="flex mt-3 max-sm:flex-wrap">
          <p className="text-base font-light text-black max-sm:mb-3">Launched in</p>
          <a href="" className="bg-slate-200 rounded-full px-4 mx-1 max-sm:mb-3">SaaS</a>
          <a href="" className="bg-slate-200 rounded-full px-4 mr-1 max-sm:mb-3">Artificial Intelligence</a>
          <a href="" className="bg-slate-200 rounded-full px-4 max-sm:mb-3">Video</a>
        </div>
      </div>
    </>
  );
};

export default Herosection;
