import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import HeroPage from '../P2 Sections/HeroPage'

const Community = () => {
    /* ===== Navbar scroll behavior ===== */
      const [showNavbar, setShowNavbar] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);
    
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
    
        <>
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
              <div className="nav-icon"><CiSearch /></div>
              <div className="nav-icon"><HiOutlineShoppingCart /></div>
            </div> 
          </nav>
          <HeroPage />
        </>
          
  )
}

export default Community