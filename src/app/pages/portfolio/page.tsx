import React from "react";

const PortfolioPage = () => {
  return (
    <>
      {/* Header */}
      <div className="my-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Portfolio
        </h2>
        <div className="h-1 w-40 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Previous Work Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-gray-300 dark:border-gray-600">
            Previous Work
          </h3>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Researcher & Host at Kairos Research
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                2024 - Present
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                I host a{" "}
                <a
                  href="https://x.com/Research_Kairos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                >
                  weekly livestream
                </a>{" "}
                covering the latest news and developments in the crypto space.
                Our{" "}
                <a
                  href="https://www.lupaweb3.kairosresearch.xyz/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                >
                  newsletter
                </a>{" "}
                has reached +500 subscribers during the first year.
                Occasionally,{" "}
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
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Community Lead at Ethereum Mexico
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                2022 - 2025
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                I cofounded{" "}
                <a
                  href="https://x.com/Ethereum_mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                >
                  Ethereum Mexico
                </a>{" "}
                and contributed as Community Lead and Finance Manager for almost
                three years. During this time I ran several scholarship
                programs, gave over 20 Ethereum-focused talks and workshops, and
                organized meetups across the country with two major events with
                an attendance of over 600 people.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Early days
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                2020 - 2022
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                I joined to crypto after my best friend convinced me to learn
                trading, during my first two years I collaborated as translator
                in BanklessDAO and shortly after I joined to Cryptoversidad
                where I developed a course for newbies.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Mechanical Designer
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                2018 - 2022
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                After graduating as Mechanical Engineer from Benemérita
                Universidad Autónoma de Puebla, I worked as a Mechanical
                Designer for several companies in the heat exchanger industry. I
                reduced 75% the production documentation process, improved
                airflow & piping designs through FEA & CFD analysis. During my
                experience at the University I mentored several students in CAD
                software like Catia, SolidWorks and Nastran.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-gray-300 dark:border-gray-600">
            Technical Expertise
          </h3>

          {/* Tech Stack*/}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">💻</span> Tech Stack
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Solidity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>TypeScript</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Foundry</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Git/GitHub</span>
              </li>
            </ul>
          </div>

          {/* Personal Projects */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">👨‍💻</span> Personal Projects
            </h4>
            <div className="space-y-4">
              <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                <h5 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  <a
                    className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                    href="https://github.com/Ariiellus/2048Wars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2048Wars
                  </a>
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  An onchain version of the classic 2048 game. I built this as
                  part of a grant from BuidlGuidl.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                <h5 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  <a
                    className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                    href="https://github.com/Ariiellus/Sweeper-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sweeper Bot Example
                  </a>
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Due my interest in MEV. I decided to build a bot that drains
                  gas tokens to understand how it works. After building it, I
                  help some friends to recover their funds.
                </p>
              </div>
            </div>
          </div>

          {/* Hackathon Projects */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="mr-2">🏆</span> Hackathon Projects
            </h4>
            <div className="space-y-4">
              <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                <h5 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  <a
                    className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                    href="https://github.com/Ariiellus/TuCausa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TuCausa
                  </a>
                  <a className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {" "}
                    | Aleph Crecimiento 🥇 Filecoin Track
                  </a>
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  A decentralized fundraising platform that empowers communities
                  to create and support local causes with complete transparency
                  using USDC on Base blockchain. I hacked solo, built contracts
                  by myself and the rest of the project was vibecoded.
                </p>
              </div>

              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                  <h5 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    <a
                      className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                      href="https://github.com/Ariiellus/Loanad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Loanad
                    </a>
                    <a className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {" "}
                      | Mobil3 by Monad 🥈 Consumer Track
                    </a>
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    An onchain peer-to-peer (P2P) lending protocol deployed on
                    Monad. platform for crowdfunding loans. I built the
                    contracts, integrate it with the frontend.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                  <h5 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    <a
                      className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                      href="https://ethglobal.com/showcase/vibeflow-8hib4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VibeFlow
                    </a>
                    <a className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {" "}
                      | ETHGlobal New York 🏆🏆
                    </a>
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    A social networking platform designed to solve the adult
                    friendship crisis by transforming event attendance into
                    meaningful connections. My first hackathon as a dev. I built
                    the contracts and wallet integrations.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                  <h5 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    <a
                      className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                      href="https://ethglobal.com/showcase/moderia-4pvy4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Moderia AI
                    </a>
                    <a className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {" "}
                      | ETHGlobal Trifecta 🏆
                    </a>
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Moderia is an AI agent that mediates digital deals between
                    service providers and clients, powered by Recall Network's
                    secure data storage. I contributed with the repo and
                    managing github branches.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-500 dark:border-blue-400">
                  <h5 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    <a
                      className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring focus:outline-none font-medium"
                      href="https://ethglobal.com/showcase/metaintents-8kjr4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MetaIntents
                    </a>
                    <a className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {" "}
                      | ETHGlobal Bangkok 🏆🏆🏆
                    </a>
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    A module for smart wallets for default cross-chain
                    transactions, utilizing multiple chains simultaneously. In
                    this hackathon, I contribute with research and building
                    diagrams for the devs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solidity Developer */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="mr-2">⚡</span> Solidity Developer
            </h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
              2023 - Present
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  Advanced Foundry{" "}
                  <span className="text-blue-600 italic">(in progress)</span> -
                  Cyfrin Updraft
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Speedrun Ethereum - BuidlGuidl</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Foundry Fundamentals - Cyfrin Updraft</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Web3 Wallet Security Basics - Cyfrin Updraft</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Smart Contracts - Cyfrin Updraft</span>
              </li>
            </ul>
          </div>

          {/* Node Operator */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="mr-2">🖥️</span> Node Operator
            </h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
              2022 - Present
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Running nodes since 2022. Currently running nodes for EtherFi, a
              community validator for Ethereum Mexico and Meta Pool.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
