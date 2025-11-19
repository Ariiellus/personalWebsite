import React from "react";
import Image from "next/image";
import { title } from "process";

const workshops = [
  {
    title: "Hellow World AVS",
    url: "https://x.com/i/broadcasts/1ynJOlYzXAyxR",
    date: "June 4, 2025",
    description: (
      <>
        A comprehensive overview of how EigenLayer AVS works and{" "}
        <a
          href="https://github.com/Ariiellus/Hello-World-AVS-es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          how you can build one
        </a>
        .
      </>
    ),
  },
  {
    title: "Collateralized Stablecoins",
    url: "https://www.youtube.com/watch?v=UDdoyYURNz0",
    date: "April 22, 2025",
  },
  {
    title: "Decentralized Website",
    url: "https://x.com/Ariiellus/status/1882458271333896602",
    date: "January 23, 2025",
    description:
      "Build your own decentralized website using ENS and IPFS.",
  },
];

const writings = [
  {
    title: "A No Code Journey",
    url: "https://mirror.xyz/ariiellus.eth/J19TcjQ5mqe4wFVfWlWL3hLC_airjiMRn9ZSVT1iZvE",
    date: "March 10, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Inclusion is the Key: FOCIL",
    url: "https://mirror.xyz/ariiellus.eth/b6EwdI7QONxRJ_AuEVHuOgRoG15saWl4ybxuqpQLqGU",
    date: "February 28, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Key Takeaways from Devcon SEA",
    url: "https://mirror.xyz/ariiellus.eth/T-7W2Gjgp8NGbxcWGoHUIWjRp_YZxAkGcSYWdM8lyBM",
    date: "January 15, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Introducción a los Based Rollups",
    url: "https://www.kairosresearch.xyz/insights/introduccion-a-los-based-rollups",
    date: "March 5, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "zkML: A Comprehensive Overview",
    url: "https://www.kairosresearch.xyz/insights/introduccion-a-zkml",
    date: "March 2, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "State of CBDCs",
    url: "https://www.kairosresearch.xyz/insights/introduccion-a-las-cbdcs-panorama-actual",
    date: "February 22, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "State of MEV: Fundamentals",
    url: "https://drive.google.com/file/d/1rrHzU5jg_E1KnGDt_cm9UCJ_P9CaE_W8/view",
    date: "February 10, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Parallel Execution: A Comprehensive Overview",
    url: "https://www.kairosresearch.xyz/insights/introduccion-a-la-ejecucion-en-paralelo",
    date: "January 30, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "EigenLayer AVS: A Comprehensive Overview",
    url: "https://www.kairosresearch.xyz/insights/eigenlayer-avs-a-comprehensive-overview",
    date: "January 20, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Data Availability: A Comprehensive Overview",
    url: "https://www.kairosresearch.xyz/insights/introduccion-a-la-data-availability",
    date: "January 10, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const WritingsPage = () => {
  return (
    <>
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gray dark:bg-gray-900 rounded-lg shadow-lg font-sans transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-6">Writings</h2>
          <div className="space-y-8">
            {workshops.map((workshop, idx) => (
              <div key={idx} className="border-b border-gray-300 pb-4">
                <a
                  href={workshop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <h3 className="text-xl font-semibold">{workshop.title}</h3>
                </a>
                <p className="flex items-center text-sm text-gray-500 mt-1">
                  <Image
                    src="/calendar-light.png"
                    alt="calendar icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {workshop.date}
                </p>
                {typeof workshop.description === "string" ? (
                  <p className="mt-2">{workshop.description}</p>
                ) : (
                  <div className="mt-2 space-y-2">{workshop.description}</div>
                )}
              </div>
            ))}
            {writings.map((writing, idx) => (
              <div key={idx} className="border-b border-gray-300 pb-4">
                <a
                  href={writing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <h3 className="text-xl font-semibold">{writing.title}</h3>
                </a>
                <p className="flex items-center text-sm text-gray-500 mt-1">
                  <Image
                    src="/calendar-light.png"
                    alt="calendar icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {writing.date}
                </p>
                {typeof writing.description === "string" ? (
                  <p className="mt-2">{writing.description}</p>
                ) : (
                  <div className="mt-2 space-y-2">{writing.description}</div>
                )}
              </div>
            ))}
          </div>
      </main>
    </>
  );
};

export default WritingsPage;
