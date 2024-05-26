import React from "react";

export default function FilterSection() {
  return (
    <div className="flex flex-row pl-3 py-5 bg-gray-200">
      <div className="flex text-black border border-gray-200">
        <button className="px-5 py-1 bg-white hover:bg-black hover:text-white border border-gray-400">
          All
        </button>
        <button className="px-5 py-1 bg-white hover:bg-black hover:text-white border border-gray-400">
          Creative
        </button>
        <button className="px-5 py-1 bg-white hover:bg-black hover:text-white border border-gray-400">
          Editorial
        </button>
      </div>
    </div>
  );
}
