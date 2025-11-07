import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      {/* First Section: Hello, stranger */}
      <h1 className="text-3xl sm:text-4xl font-bold pb-3 text-gray-900 dark:text-white">Hello, stranger</h1>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center border-b border-gray-200 dark:border-gray-700 pb-6 mb-6 min-w-0 overflow-x-auto">
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
            className="w-48 h-48 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4"
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
                width={25}
                height={25}
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
                width={25}
                height={25}
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
                width={25}
                height={25}
                className="w-4 h-4 hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Right: About Me */}
        <div className="flex flex-col col-span-2 justify-center text-left h-full min-w-0">
          <p className="my-4 max-w-prose text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <a
              href="https://www.redbull.com/int-en/episodes/the-inspiration-inside-the-fourth-phase-s01-e01?rbup-media-time=136&rbup-media-id=rrn%3Acontent%3Aepisode-videos%3A74831188-043b-5742-b7bf-be4926f6ef7b%3Aen-INT#t=2m16s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none"
            >
              this process we follow, this cycle we ride
            </a>
          </p>
          <blockquote className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 italic my-4 rounded-lg shadow-md max-w-prose text-justify text-gray-800 dark:text-gray-200 leading-relaxed">
            I'm Ariel! 🧑‍💻
            <br />
            <br />
            Mechanical Engineer, self-taught developer. My goal in life is
            simple, live a life I would love to remember. Spending the next 10
            years building something to contribute to the human race. 🚀
          </blockquote>
          <p className="my-4 max-w-prose text-gray-700 dark:text-gray-300">
            <a
              href="https://lazyslowdown.com/ichigo-ichie-embracing-joy-in-transitions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              [一期一会]
            </a>
          </p>
        </div>
      </section>

            {/* Second Section: Contributions */}
            <section className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
            <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Contributions</h2>
        <div className="h-1 w-60 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
      </div>

        <div className="w-full flex flex-col items-center sm:items-center space-y-6">
          {/* Kairos Research */}
          <h3 className="text-xl font-bold w-full text-left mt-4 sm:mt-0 text-gray-900 dark:text-white">
            Kairos Research
          </h3>
          <p className="text-base w-full text-left text-gray-700 dark:text-gray-300 leading-relaxed">
            I host a{" "}
            <a
              href="https://x.com/Research_Kairos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              weekly livestream
            </a>{" "}
            covering the latests news and developments in the crypto space. Our{" "}
            <a
              href="https://www.lupaweb3.kairosresearch.xyz/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              newsletter
            </a>{" "}
            has reached +500 subscribers during the first year. Occasionally,{" "}
            <a
              href="https://mirror.xyz/ariiellus.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              I write blogs
            </a>{" "}
            about MEV, DeFi and Ethereum Roadmap.
          </p>

          {/* Node Operator */}
          <h3 className="text-xl font-bold w-full text-left mt-4 sm:mt-0 text-gray-900 dark:text-white">
            Node Operator
          </h3>
          <p className="text-base w-full text-left text-gray-700 dark:text-gray-300 leading-relaxed">
            I've been running nodes since Q4 '22. My experience includes running
            several testnets like Holesky, Hoodi, Celestia or Aztec Network.
            Today I own the Obol Techne Silver Credential (also I'm{" "}
            <a
              href="https://www.tally.xyz/gov/obol/delegate/ariiellus.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              delegate{" "}
            </a>
            for Obol Collective), I'm running several validators for{" "}
            <a
              href="https://shorturl.at/chstP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              EtherFi
            </a>
            , a community validator for{" "}
            <a
              href="https://shorturl.at/vu3GW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              Ethereum Mexico
            </a>
            , a 0x02 Gnosis validator and a{" "}
            <a
              href="https://app.mynearwallet.com/staking/kairosresearch.pool.near"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              Near Protocol node
            </a>{" "}
            for Meta Pool.
          </p>

          {/* Previous contributions */}
          <h3 className="text-xl font-bold w-full text-left mt-4 sm:mt-0 text-gray-900 dark:text-white">
            Previous contributions
          </h3>
          <p className="text-base w-full text-left text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently I'm part of the{" "}
            <a
              href="https://x.com/eigentribe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus-visible:ring-blue-600 focus:outline-none font-medium"
            >
              EigenTribe Ambassador
            </a>{" "}
            program, but in the past I co-founded{" "}
            <a
              href="https://x.com/ethereum_mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
            >
              Ethereum Mexico
            </a>{" "}
            and during almost three years I was Community Lead. In addition,
            during my first two years I contributed to BanklessDAO as
            translator, hosted a study group for Token Engineering and worked as
            researcher for Cryptoversidad.
          </p>
        </div>
      </section>

      {/* Third Section: Interests and Hobbies*/}
      <section className="pb-8 mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Interests</h2>
        <p className="my-4 max-w-prose text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          Most of my time is spent in some of these topics:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start min-w-0">
          {/* Tech */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold pb-4 text-gray-900 dark:text-white">Tech</h3>
            <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
              <li className="flex items-center"><span className="mr-3 text-xl">🌳</span> MEV</li>
              <li className="flex items-center"><span className="mr-3 text-xl">🕵️‍♂️</span> Security</li>
              <li className="flex items-center"><span className="mr-3 text-xl">🔬</span> Ethereum Research</li>
              <li className="flex items-center"><span className="mr-3 text-xl">📊</span> DeFi</li>
              <li className="flex items-center"><span className="mr-3 text-xl">📝</span> Cryptoeconomics</li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold pb-4 text-gray-900 dark:text-white">Hobbies</h3>
            <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
              <li className="flex items-center"><span className="mr-3 text-xl">♟️</span> Chess</li>
              <li className="flex items-center"><span className="mr-3 text-xl">🧠</span> Reading</li>
              <li className="flex items-center"><span className="mr-3 text-xl">🤸‍♂️</span> Calisthenics</li>
              <li className="flex items-center"><span className="mr-3 text-xl">⛰️</span> Mountaineering</li>
              <li className="flex items-center"><span className="mr-3 text-xl">🏃‍♂️</span> Running</li>
            </ul>
          </div>
        </div>
      </section>
    

    </>
  );
};

export default AboutPage; 