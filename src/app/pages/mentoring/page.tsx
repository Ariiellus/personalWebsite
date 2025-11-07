import React from "react";

const MentoringPage = () => {
  return (

    <section id="mentoring" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
        Free Mentoring
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        If you are struggling with something in web3 maybe I can help you. 
        <br />
        <br />
        In the past I have helped others to recover funds from compromised wallets, improve their operational security practices, life / work balance and more. 
        <br />
        <br />
        If you are interested in mentoring, please <a
        href="https://cal.com/ariiellus/office-hours"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
      >
        Schedule a call
      </a>.
      </p>
  
    </section>
  );
};

export default MentoringPage;
