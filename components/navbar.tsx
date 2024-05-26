"use client";

import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="sticky">
      <nav className="hidden relative py-5 px-3 sm:flex flex-row justify-between bg-black text-white">
        <h1>IMAGE GALLERY</h1>
        <div className="flex flex-row gap-7">
          <button className="inline-flex items-center font-normal text-white gap-2">
            <CiHeart />
            Lightboxes
          </button>
          <button className="inline-flex items-center font-normal text-white gap-2">
            <BsCart3 />
            cart
          </button>
          <button className="inline-flex items-center font-normal text-white border border-white rounded-md py-1 px-4">
            Sign in
          </button>
        </div>
      </nav>
      <nav className="sm:hidden relative flex flex-row my-4 bg-black text-white">
        <h1>IMAGE GALLERY</h1>
        <div className="flex flex-row gap-7">
          <button className="inline-flex items-center font-normal text-white">
            <CiHeart />
          </button>
          <button className="inline-flex items-center font-normal text-white">
            <BsCart3 />
          </button>
          <button className="inline-flex items-center font-normal text-white border border-white rounded-md py-1 px-4">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
