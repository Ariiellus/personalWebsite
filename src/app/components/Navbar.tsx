"use client";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4 mb-8 shadow-md backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 font-sans transition-colors duration-300">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10">
        <a
          href="/"
          className="relative text-blue-600 dark:text-blue-400 font-semibold px-2 py-1 transition-colors group"
        >
          Home
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
        </a>
        <a
          href="#portfolio"
          onClick={(e) => scrollToSection(e, 'portfolio')}
          className="relative text-blue-600 dark:text-blue-400 font-semibold px-2 py-1 transition-colors group"
        >
          Portfolio
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
        </a>
        <a
          href="/pages/writings"
          className="relative text-blue-600 dark:text-blue-400 font-semibold px-2 py-1 transition-colors group"
        >
          Writings
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
