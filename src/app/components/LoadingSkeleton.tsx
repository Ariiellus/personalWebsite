import React from "react";

export const CardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-pulse">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
    </div>
  );
};

export const SectionSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="mb-8">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-3"></div>
        <div className="h-1 w-40 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center animate-pulse">
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
        <div className="flex gap-4">
          <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
        <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
      </div>
    </div>
  );
};
