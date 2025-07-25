"use client";

import React from "react";
import Image from "next/image";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center bg-white text-black border-b border-gray-200 px-6 py-4 mb-8 shadow-sm font-sans">
      <div className="flex items-center gap-10">
        <a href="/">
          <Image
            src="/Fuffle1405.png"
            alt="Ariiellus Profile Picture"
            width={56}
            height={56}
            className="rounded-full border-2 border-gray-200 shadow-sm mr-4"
          />
        </a>
        <a href="/" className="relative text-blue-600 font-semibold px-2 py-1 transition-colors group">
          Home
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
        </a>
        <a href="/pages/writings" className="relative text-blue-600 font-semibold px-2 py-1 transition-colors group">
          Writings
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
        </a>
        <a href="/pages/about" className="relative text-blue-600 font-semibold px-2 py-1 transition-colors group">
          About
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
        </a>
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;