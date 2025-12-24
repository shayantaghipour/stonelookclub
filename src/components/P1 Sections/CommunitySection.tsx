import React from "react";
import { useNavigate } from "react-router-dom";


const CommunitySection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="community-showcase">
      {/* Left images */}
      <div className="community-col left">
        <img
          src="./src/assets/images/community-section/community-1 L.jpg"
          alt="Community visual 4"
          className="community-img img-right-over"
        />
        <img
          src="./src/assets/images/community-section/community-2 L.jpg"
          alt="Community visual 1"
          className="community-img img-left-top"
        />
        <img
          src="./src/assets/images/community-section/community-3 L.webp"
          alt="Community visual 2"
          className="community-img img-left-bottom"
        />
        <img
          src="./src/assets/images/community-section/community-4 L.jpg"
          alt="Community visual 2"
          className="community-img img-left-under"
        />
      </div>

      {/* Center content */}
      <div className="community-center">
        <h2>Where Culture Meets Community</h2>
        <p>
          A creative ecosystem built around people, stories, and shared
          experiences. Our community brings together art, fashion, and digital
          culture into one evolving world.
        </p>

        <button
        className="community-btn"
        onClick={() => navigate("/community")}
        >
          Read More
        </button>
      </div>

      {/* Right images */}
      <div className="community-col right">
        <img
          src="./src/assets/images/community-section/community-1 R.jpg"
          alt="Community visual 3"
          className="community-img img-right-topcenter"
        />
        <img
          src="./src/assets/images/community-section/community-2 R.jpg"
          alt="Community visual 3"
          className="community-img img-right-top"
        />
        <img
          src="./src/assets/images/community-section/community-3 R.jpg"
          alt="Community visual 4"
          className="community-img img-right-bottom"
        />
        <img
          src="./src/assets/images/community-section/community-4 R.jpg"
          alt="Community visual 2"
          className="community-img img-left-rightunder"
        />
      </div>
    </section>
  );
};

export default CommunitySection;
