import React from "react";

const OpenSeaSection: React.FC = () => {
  return (
    <section className="opensea-preview">
      <div className="opensea-card">
        {/* Left */}
        <div className="opensea-left">
          <h2>Stonelookclub NFT</h2>

          <p>
            A limited digital collection blending fashion,
            identity, and Web3 culture.
          </p>

          <button className="opensea-btn"
          onClick={() =>
              window.open("https://opensea.io", "_blank", "noopener,noreferrer")
            }
          >
            View Collection
          </button>
        </div>

        {/* Right */}
        <div className="opensea-right">
          <img
            src="./src/assets/images/opensea-logo.png"
            alt="NFT Preview"
          />
        </div>
      </div>
    </section>
  );
};

export default OpenSeaSection;
