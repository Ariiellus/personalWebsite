import React, { Suspense } from "react";
import { NextPage } from "next";
import AboutPage from "./pages/about/page";
import MentoringPage from "./pages/mentoring/page";
import { ProfileSkeleton } from "./components/LoadingSkeleton";

const AriiellusWebsite: NextPage = () => {
  return (
    <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gray dark:bg-gray-900 rounded-lg shadow-lg font-sans transition-colors duration-300">
      <section id="about" className="scroll-mt-20">
        <Suspense fallback={<ProfileSkeleton />}>
          <AboutPage />
        </Suspense>
      </section>

      <Suspense fallback={<div className="h-48 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg my-8"></div>}>
        <MentoringPage />
      </Suspense>

      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-xs text-gray-500 dark:text-gray-400">
        <p className="mb-2">
          Built with passion and code.{" "}
          <a
            href="https://github.com/Ariiellus/personalWebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
          >
            Fork me on GitHub
          </a>
        </p>
        <p className="text-gray-400 dark:text-gray-500">© 2025 Ariiellus. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default AriiellusWebsite;
