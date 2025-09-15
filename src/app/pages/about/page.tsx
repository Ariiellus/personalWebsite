import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-10 bg-white rounded-lg shadow font-sans">
      {/* Main Two-Column Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center border-b border-gray-200 pb-8 min-w-0 overflow-x-auto">
        {/* Left: Profile + Delegate */}
        <div className="flex flex-col justify-center items-center sm:items-center text-left h-full min-w-0">
          <Image
            src="/Fuffle1405.png"
            alt="Ariiellus Profile Picture"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full border-2 border-gray-200 shadow mb-4"
            priority
          />
          <div className="w-full flex flex-col items-center sm:items-center">
            <h2 className="mt-2 text-lg font-semibold w-full text-left">Delegate at</h2>
            <ul className="list-disc pl-5 space-y-1 mt-1 text-sm w-full text-left">
              <li>
                <a
                  href="https://www.tally.xyz/gov/obol/delegate/ariiellus.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
                >
                  Obol Collective
                </a>
              </li>
              <li>
                <a
                  href="https://vote.ether.fi/delegates/ariiellus.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
                >
                  EtherFi
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right: Contact + Node Operator */}
        <div className="flex flex-col justify-center items-center sm:items-center text-left h-full gap-6 min-w-0">
          <div className="w-full flex flex-col items-center sm:items-center">
            <h2 className="text-lg font-semibold w-full text-left">Contact</h2>
            <div className="flex flex-col space-y-1 mt-1 text-sm w-full text-left">
              <li>
                <a href="https://x.com/Ariiellus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus-visible:ring focus:outline-none">X</a>
              </li>
              <li>
                <a href="https://t.me/Ariiellus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus-visible:ring focus:outline-none">Telegram</a>
              </li>
              <li>
                <a href="https://github.com/ariiellus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus-visible:ring focus:outline-none">Github</a>
              </li>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:items-center">
            <h2 className="text-lg font-semibold w-full text-left mt-4 sm:mt-0">Node Operator</h2>
            <ul className="list-disc pl-5 space-y-1 mt-1 text-sm w-full text-left">
              <li>Ethereum L1 for EtherFi</li>
              <li>Gnosis SS</li>
              <li>Near Protocol for Meta Pool</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-gray-200 pb-8 mt-8">
        <h2 className="text-2xl font-semibold pb-2">About Me</h2>
        <p className="my-4 max-w-prose">
          <a
            href="https://www.facebook.com/VDsixsnowboard/videos/403370100085137/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
          >
            this process we follow, this cycle we ride
          </a>
        </p>
        <blockquote className="bg-gray-50 border-l-4 border-blue-200 p-4 italic my-4 rounded-lg shadow-sm max-w-prose">
          🧑‍💻 Hi, I am Ariel! Passionate about Ethereum research, MEV, cryptoeconomics, and Security. Learning Solidity.
          When offline, I love chess, calisthenics, running and climb mountains. 🚀
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
      </section>

      {/* Interests and Hobbies Section - Two Columns */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center border-b border-gray-200 pb-8 min-w-0 overflow-x-auto">
        <div>
          <h2 className="text-xl font-semibold pb-2">Interests</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>🌳 MEV</li>
            <li>🕵️‍♂️ Security</li>
            <li>🔬 Ethereum Research</li>
            <li>📊 DeFi Analyst</li>
            <li>📝 Cryptoeconomics</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-2">Hobbies</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>♟️ Chess</li>
            <li>🤸‍♂️ Calisthenics</li>
            <li>🏃‍♂️ Running</li>
            <li>⛰️ Mountaineering</li>
            <li>🧠 Perpetual Learning</li>
          </ul>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="pb-4 mt-8">
        <h2 className="text-2xl font-semibold pb-2">What I Do</h2>
        <p className="my-4 max-w-prose">
          <a
            href="https://x.com/Research_Kairos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
          >
            <strong>Kairos Research</strong> ⌛️
          </a>
          <br />
          Co-founder, CEO, and Main Researcher. I lead my team to write amazing blogs.
        </p>
        <p className="my-4 max-w-prose">
          <a
            href="https://x.com/Ethereum_mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline focus-visible:ring focus:outline-none"
          >
            <strong>Ethereum Mexico</strong> 🇲🇽
          </a>
          <br />
          Co-founder, former Community Lead and Finance Manager.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Ariiellus
      </footer>
    </main>
  );
};

export default AboutPage; 