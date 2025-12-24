import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const videos = [
    "./src/assets/videos/hero-section/hero-video.mp4",
    "./src/assets/videos/hero-section/hero-video2.mp4",
    "./src/assets/videos/hero-section/hero-video3.mp4",
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  const handleEnded = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Be Bold.
          <br />
          Style Everywhere.
        </h1>

        <p className="hero-sub">
          Built for a new era where fashion, digital identity,
          and creativity move as one.
        </p>

        <div className="hero-buttons">
          {/* داخلی */}
          <button
            className="btn-secondary"
            onClick={() => navigate("/opensea")}
          >
            Shop Now
          </button>

          {/* خارجی - تب جدید */}
          <button
            className="btn-primary"
            onClick={() =>
              window.open("https://opensea.io", "_blank", "noopener,noreferrer")
            }
          >
            Explore
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-video-wrapper">
          <video
            key={index}
            ref={videoRef}
            className="hero-video"
            src={videos[index]}
            autoPlay
            muted
            playsInline
            onEnded={handleEnded}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
