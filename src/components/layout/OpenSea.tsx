import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { collections } from "../P4 Sections/collections";


const OpenSea = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [searchOpen, setSearchOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");


  const filteredCollections = collections.filter(nft =>
  nft.title.toLowerCase().includes(searchQuery.toLowerCase())
);


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 80) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <div className="nav-left"><div className="logo">Stonelookclub</div></div>
        <div className="nav-center">
          <NavLink to="/" className="nav-tab">Home</NavLink>
          <NavLink to="/community" className="nav-tab">Community</NavLink>
          <NavLink to="/team" className="nav-tab">Team</NavLink>
          <NavLink to="/opensea" className="nav-tab active">OpenSea</NavLink>
        </div>
        <div className="nav-right">
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

      <section className="market">
        <h2 className="market-title">STONEL00K Collection</h2>

        <div className="market-grid">
          {collections.map((nft) => (
            <div key={nft.id} className="nft-card">
              <img src={nft.image} alt={nft.title} className="nft-image" />
              <h4 className="nft-title">{nft.title}</h4>
              <span className="nft-price">{nft.price} ETH</span>
              <a
                href="#"
                className="buy-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on OpenSea
              </a>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OpenSea;
