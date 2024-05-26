"use client";

import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { PiDownload } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaImages } from "react-icons/fa";

export function SingleImage(props: any) {
  const { image } = props;

  return (
    <div
      key={image.id}
      className="h-64 bg-gray-200 relative group  overflow-hidden"
    >
      <Image
        key={image.id}
        src={image.src.large}
        alt={image.alt}
        fill={true}
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        className="object-cover hover:opacity-85"
      />
      {/* <div className="opacity-0 hover:opacity-100 duration-300 flex flex-col justify-between">
        <div className="w-[50px] flex-row flex-shrink gap-1 text-base whitespace-nowrap absolute inset-0 z-10 flex text-white font-light">
          {image.alt}
        </div>
        <div className="top-20 text-white">dfhdsffdf</div>
      </div> */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-opacity-50 text-white p-2 truncate font-light text-xs">
          {image.alt}
        </div>
        <div className="bg-opacity-50 text-white p-2 truncate font-light flex-row justify-between inline-flex items-center">
          <p className=" text-xs truncate w-32">
            Photographer: {image.photographer}
          </p>
          <div className="flex flex-row gap-1">
            <button
              className="text-black bg-green-400 p-1 rounded-md"
              type="button"
            >
              <IoCartOutline />
            </button>
            <button
              className="text-white bg-black p-1 rounded-md"
              type="button"
            >
              <PiDownload />
            </button>
            <button
              className="text-white bg-black p-1 rounded-md"
              type="button"
            >
              <IoIosAddCircleOutline />
            </button>
            <button
              className="text-white bg-black p-1 rounded-md"
              type="button"
            >
              <FaImages />
            </button>
          </div>
        </div>
      </div>
      <div className="relative group w-64 h-64">
        {/* <img src={src} alt={alt} className="w-full h-full object-cover" /> */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
          <div className="relative bg-black text-white text-xs rounded py-1 px-2">
            fgfjhffg sdfsdjfjgsjfgsd dfdgsjfg
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
