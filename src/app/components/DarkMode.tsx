"use client";

import { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  // On mount, check localStorage or system preference
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    setDarkMode(true);
  } else {
      document.documentElement.classList.remove("dark");
    setDarkMode(false);
  }
}, []);

const toggleTheme = () => {
  if (darkMode) {
      document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setDarkMode(false);
  } else {
      document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setDarkMode(true);
  }
};

return (
    <div className="flex items-center ml-4 select-none">
      <span className="text-xl mr-2">☀️</span>
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className={`w-12 h-6 flex items-center rounded-full transition-colors duration-300 focus:outline-none ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
      >
        <span
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>
      <span className="text-xl ml-2">🌙</span>
  </div>
);
};

export default DarkMode;
