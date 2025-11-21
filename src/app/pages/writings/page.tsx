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
    url: "https://github.com/Ariiellus/Stablecoins-Oracle-Workshop",
    date: "April 22, 2025",
    description: (
      <>
      Workshop for UNAM University on how to build a collateralized stablecoin with an oracle mechanism.
      {" "}
      <a
        href="https://github.com/Ariiellus/Stablecoins-Oracle-Workshop"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Code here
      </a>
      .
    </>
    ),
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
    title: "Introduction to Preconfirmations",
    url: "https://seedlatam.gitbook.io/seedlatam/avanzado-topicos/mev/preconfirmaciones-la-nueva-tarea-del-proposer",
    date: "April 21, 2025",
    description:
      "Preconfirmations provide early transaction guarantees in Ethereum, improving user experience with near-instant confirmations, but raise concerns about MEV centralization and builder concentration risks.", 
  },
  {
    title: "MEV Economics",
    url: "https://seedlatam.gitbook.io/seedlatam/avanzado-topicos/mev/rol-de-mev-en-la-economia",
    date: "April 14, 2025",
    description:
      "MEV allows validators to profit by manipulating transaction order across blockchains, creating issues like higher costs or censorship but is all MEV bad? Or is it just a tool that allow markets to work efficiently?",
  },
  {
    title: "Introduction to MEV",
    url: "https://seedlatam.gitbook.io/seedlatam/avanzado-topicos/mev/introduccion-el-papel-de-mev-en-blockchain",
    date: "May 7, 2025",
    description:
      "MEV (Maximum Extractable Value) allows validators to profit by manipulating transaction order across blockchains, creating issues like higher costs, censorship, and centralization despite some beneficial uses.",
  },
  {
    title: "Inclusion is the Key: FOCIL",
    url: "https://mirror.xyz/ariiellus.eth/b6EwdI7QONxRJ_AuEVHuOgRoG15saWl4ybxuqpQLqGU",
    date: "December 9, 2024",
    description:
      "FOCIL introduces a committee of 16 validators to create inclusion lists, enhancing Ethereum's censorship resistance and credible neutrality without economic incentives.",
  },
  {
    title: "State of MEV: A Comprehensive Overview",
    url: "https://drive.google.com/file/d/1rrHzU5jg_E1KnGDt_cm9UCJ_P9CaE_W8/view?usp=sharing",
    date: "May 2, 2024",
    description:
      "Maximum Value Extractable has been around since the beginning of Ethereum hurting users and benefiting a few. Despite efforts, the problem still exists but the access to it has been democratized",
  },
  {
    title: "EigenLayer AVS: A Comprehensive Overview",
    url: "https://www.kairosresearch.xyz/insights/eigenlayer-avs-a-comprehensive-overview",
    date: "January 20, 2024",
    description:
      "AVS or Actively Validated Services are decentralized services built on Ethereum that provides custom verification mechanisms of off-chain operations.",
  }
];

const WritingsPage = () => {
  return (
    <>
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gray dark:bg-gray-900 rounded-lg shadow-lg font-sans transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-6">Tutorials</h2>
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
            <h2 className="text-3xl font-bold mb-6">Writings</h2>
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
