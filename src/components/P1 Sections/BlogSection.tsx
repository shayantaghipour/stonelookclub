import React from "react";

const BlogSection: React.FC = () => {

  return (
    <section className="blog-preview">
      {/* Left */}
      <div className="blog-preview-left">
        <h2>Why Choose us</h2>

        <p>
          Stories, insights, and ideas shaping the future of digital culture,
          creativity, and community. Explore what’s happening now — and what’s
          coming next.
        </p>

        <button
          className="blog-preview-btn"
          onClick={() => window.open("/blog", "_blank")}
        >
          Visit Blog
        </button>
      </div>

      {/* Right */}
      <div className="blog-preview-right">
        <img
          src="./src/assets/images/anime-style-group-boys-spending-time-together-enjoying-their-friendship.jpg"
          alt="Blog Preview"
        />
      </div>
    </section>
  );
};

export default BlogSection;
