import React from "react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const EndSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openOpenSea = () => {
    window.open("https://opensea.io", "_blank");
  };

  return (
    <section className="end-section">
      <div className="end-card">
        {/* Brand */}
        <div className="end-brand">
          <h2>STONEL00KCLUB</h2>
          <p>Digital fashion. Culture. Identity.</p>
        </div>

        {/* Links */}
        <div className="end-links">
          <div className="end-col">
            <h4>Explore</h4>
            <span className="end-link" onClick={scrollToTop}>
              Home
            </span>
            <span className="end-link" onClick={() => navigate("/community")}>
              Community
            </span>
            <span className="end-link" onClick={() => navigate("/team")}>
              Team
            </span>
          </div>

          <div className="end-col">
            <h4>Web3</h4>
            <span className="end-link" onClick={openOpenSea}>
              OpenSea
            </span>
            <span className="end-link">NFTs</span>
            <span className="end-link">Future Drops</span>
          </div>

          <div className="end-col">
            <h4>Brand</h4>
            <span className="end-link">About</span>
            <span className="end-link">Vision</span>
            <span className="end-link">Contact</span>
          </div>
        </div>

        {/* Social */}
        <div className="end-social">
          <FaXTwitter
            onClick={() => window.open("https://x.com/Stonelookclub", "_blank")}
          />
          <FaTelegram
            onClick={() => window.open("https://t.me/Stonelookclub", "_blank")}
          />
        </div>

        {/* Footer */}
        <div className="end-footer">
          © 2025 Stonelookclub. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default EndSection;
