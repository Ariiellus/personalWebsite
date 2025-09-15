import React from "react";
import Image from "next/image";
import { NextPage } from "next";

const AriiellusWebsite: NextPage = () => {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-4 bg-white rounded-lg shadow font-sans">
      {/* First Section: Hello, stranger */}
      <h1 className="text-2xl font-semibold pb-1">Hello, stranger</h1>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center border-b border-gray-200 pb-4 min-w-0 overflow-x-auto">
        {/* Left: Profile photo */}
        <div
          className="flex flex-col col-span-1 pt-10 
                items-center justify-center text-left h-full min-w-0"
        >
          <Image
            src="/Fuffle1405.png"
            alt="Ariiellus Profile Picture"
            width={240}
            height={240}
            className="w-48 h-48 rounded-full border-2 border-gray-200 shadow mb-4"
            priority
          />

          {/* Socials */}
          <div className="flex flex-row pt-4 gap-5">
            <a
              href="https://x.com/Ariiellus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter-light.png"
                alt="X"
                width={20}
                height={20}
                className="w-4 h-4 hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <a
              href="https://t.me/Ariiellus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/telegram-light.png"
                alt="Telegram"
                width={20}
                height={20}
                className="w-4 h-4 hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <a
              href="https://github.com/ariiellus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-light.png"
                alt="Github"
                width={20}
                height={20}
                className="w-4 h-4 hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Right: About Me */}
        <div className="flex flex-col col-span-2 justify-center text-left h-full min-w-0">
          <p className="my-4 max-w-prose">
            <a
              href="https://www.redbull.com/int-en/episodes/the-inspiration-inside-the-fourth-phase-s01-e01?rbup-media-time=136&rbup-media-id=rrn%3Acontent%3Aepisode-videos%3A74831188-043b-5742-b7bf-be4926f6ef7b%3Aen-INT#t=2m16s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              this process we follow, this cycle we ride
            </a>
          </p>
          <blockquote className="bg-gray-50 border-l-4 border-blue-200 p-4 italic my-4 rounded-lg shadow-sm max-w-prose text-justify">
            I'm Ariel! 🧑‍💻
            <br />
            <br />
            Mechcanical Engineer, self-taught developer. My goal in life is
            simple, live a life I would love to remember. Spending the next 10
            years building something to contribute to the human race. 🚀
          </blockquote>
          <p className="my-4 max-w-prose">
            <a
              href="https://lazyslowdown.com/ichigo-ichie-embracing-joy-in-transitions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              [一期一会]
            </a>
          </p>
        </div>
      </section>

      {/* Second Section: Contributions */}
      <section className="border-b border-gray-200 pb-4 mt-4">
        <h2 className="text-2xl font-semibold pb-2">Contributions</h2>

        <div className="w-full flex flex-col items-center sm:items-center">
          {/* Kairos Research */}
          <h3 className="text-lg font-semibold w-full text-left mt-4 sm:mt-0">
            Kairos Research
          </h3>
          <p className="text-sm w-full text-left">
            I host a{" "}
            <a
              href="https://x.com/Research_Kairos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              weekly livestream
            </a>{" "}
            covering the latests news and developments in the crypto space. Our{" "}
            <a
              href="https://www.lupaweb3.kairosresearch.xyz/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              newsletter
            </a>{" "}
            has reached +500 subscribers during the first year. Ocassionally,{" "}
            <a
              href="https://mirror.xyz/ariiellus.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              I write blogs
            </a>{" "}
            about MEV, DeFi and Ethereum Roadmap.
          </p>
          <br />

          {/* Node Operator */}
          <h3 className="text-lg font-semibold w-full text-left mt-4 sm:mt-0">
            Node Operator
          </h3>
          <p className="text-sm w-full text-left">
            I've been running nodes since Q4 '22. My experience includes running
            several testnets like Holesky, Hoodi, Celestia or Aztec Network.
            Today I own the Obol Techne Silver Credential (also I'm{" "}
            <a
              href="https://www.tally.xyz/gov/obol/delegate/ariiellus.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              delegate{" "}
            </a>
            for Obol Collective), I'm running several validators for{" "}
            <a
              href="https://shorturl.at/chstP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              EtherFi
            </a>
            , a community validator for{" "}
            <a
              href="https://shorturl.at/vu3GW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              Ethereum Mexico
            </a>
            , a 0x02 Gnosis validator and a{" "}
            <a
              href="https://app.mynearwallet.com/staking/kairosresearch.pool.near"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              Near Protocol node
            </a>{" "}
            for Meta Pool.
          </p>
          <br />

          {/* Previous contributions*/}
          <h3 className="text-lg font-semibold w-full text-left mt-4 sm:mt-0">
            Previous contributions
          </h3>
          <p className="text-sm w-full text-left">
            Currently I'm part of the{" "}
            <a
              href="https://x.com/eigentribe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus-visible:ring-blue-600 focus:outline-none"
            >
              EigenTribe Ambassador
            </a>{" "}
            program, but in the past I co-founded{" "}
            <a
              href="https://x.com/ethereum_mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
            >
              Ethereum Mexico
            </a>{" "}
            and during almost three years I was Community Lead. In addition,
            during my first two years I contributed to BanklessDAO as
            translator, hosted a study group for Token Engineering and worked as
            researcher for Cryptoversidad. testing github actions
          </p>
        </div>
      </section>

      {/* Third Section: Interests and Hobbies*/}
      <section className="border-b border-gray-200 pb-4 mt-4">
        <h2 className="text-2xl font-semibold ">Interests</h2>
        <p className="my-2 max-w-prose">
          Most of my time is spent in some of these topics:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center border-b border-gray-200 pb-4 min-w-0 overflow-x-auto">
          {/* Tech */}
          <div>
            <h3 className="text-xl font-semibold pb-2">Tech</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>🌳 MEV</li>
              <li>🕵️‍♂️ Security</li>
              <li>🔬 Ethereum Research</li>
              <li>📊 DeFi</li>
              <li>📝 Cryptoeconomics</li>
            </ul>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-xl font-semibold pb-2">Hobbies</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>♟️ Chess</li>
              <li>🧠 Reading</li>
              <li>🤸‍♂️ Calisthenics</li>
              <li>⛰️ Mountaineering</li>
              <li>🏃‍♂️ Running</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-xs text-gray-400">
        I built this by my own, yeeei. 🤘{" "}
        <a
          href="https://github.com/Ariiellus/personalWebsite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
        >
          Fork me
        </a>
      </footer>
    </main>
  );
};

export default AriiellusWebsite;
