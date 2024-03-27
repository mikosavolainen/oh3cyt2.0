import React from 'react';

const Logbook = () => {
  return (
    <section id="HF-Logbook">
      <h2 id="log-h2">Last contacts:</h2>
      <div className="iframe-container">
        <iframe frameBorder="0" scrolling="yes" src="https://logbook.qrz.com/lbstat/OH3CYT/"></iframe>
      </div>
    </section>
  );
};

export default Logbook;
