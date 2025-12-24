import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

import BlogSection from "../P1 Sections/BlogSection";
import CommunitySection from "../P1 Sections/CommunitySection";
import TeamSection from "../P1 Sections/TeamSection";
import OpenSeaSection from "../P1 Sections/OpenSeaSection";
import EndSection from "../P1 Sections/EndSection";
import HeroSection from "../P1 Sections/HeroSection";

const Home = () => {
  /* ===== Navbar scroll behavior ===== */
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="hero-container">
      {/* ================= Navbar ================= */}
      <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <div className="nav-left">
          <div className="logo">Stonelookclub</div>
        </div>

        <div className="nav-center">
          <NavLink to="/" className="nav-tab">Home</NavLink>
          <NavLink to="/community" className="nav-tab">Community</NavLink>
          <NavLink to="/team" className="nav-tab">Team</NavLink>
          <NavLink to="/opensea" className="nav-tab">OpenSea</NavLink>
        </div>

        <div className="nav-right">
  <div className="nav-icon" onClick={() => setSearchOpen(!searchOpen)}>
    <CiSearch />
  </div>
  {searchOpen && (
    <input
      type="text"
      placeholder="Search collections..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
    />
  )}
          <div className="nav-icon"><HiOutlineShoppingCart /></div>
        </div>
      </nav>

      {/* ================= HOME SECTIONS ================= */}
      <HeroSection />
      <BlogSection />
      <CommunitySection />
      <TeamSection />
      <OpenSeaSection />
      <EndSection />
    </div>
  );
};

export default Home;
