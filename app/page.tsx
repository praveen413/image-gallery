import FilterSection from "@/components/filte-section";
import Gallery from "@/components/gallery";
import ImageSearch from "@/components/image-search";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageSearch />
      <FilterSection />
      <div className="flex flex-col pb-4 pt-3">
        <div className="flex flex-row justify-between px-4">
          <p>car stock images 236724</p>
          <div className="flex flex-row gap-3">
            <div className=" flex-row pr-6  text-center inline-flex items-center gap-2">
              <p>page 1 of 500</p>
              <button className="text-black font-medium px-2 py-1 border border-black rounded-md">
                &#8249;
              </button>
              <button className="text-black font-medium px-2 py-1 border border-black rounded-md">
                &#8250;
              </button>
            </div>
            <div className=" flex-row pr-6  text-center inline-flex items-center gap-2">
              <p>Go to page</p>
              <input
                type="text"
                placeholder=""
                className="w-20 focus:outline-none border border-black rounded-md"
              />
              <button className="text-black font-medium px-2 py-1 border border-black rounded-md">
                &#8250;
              </button>
            </div>
          </div>
        </div>
        <Gallery />
        <div className="flex align-middle justify-center">
          <button className="border border-gray-200 rounded-md px-8 py-1">
            Next page
          </button>
        </div>
      </div>
    </div>
  );
}
