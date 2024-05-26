import React from "react";

import { CiSearch } from "react-icons/ci";
import { FaRegImage } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa6";

export default function ImageSearch() {
  return (
    <div className="flex border border-b-2 border-black">
      <div className="flex w-2/12 p-4 border-r-2 border-black">
        <div className="text-black focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 gap-2 text-center inline-flex items-center">
          <FaRegImage />
          All Images
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex w-8/12 p-4">
        <div className="relative flex-row text-center inline-flex items-center">
          <CiSearch size={25} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className=" w-2/12 p-4 text-center inline-flex items-center gap-2 border-l-2 border-black">
        <FaCamera />
        Search by image
      </div>
    </div>
  );
}
