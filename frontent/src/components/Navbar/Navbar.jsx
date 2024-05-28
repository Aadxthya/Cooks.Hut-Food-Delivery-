import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Timeout to allow the navigation to home first
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />
      <div className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to='/' onClick={() => { setMenu("home"); toggleMobileMenu(); }} className={menu === "home" ? "active" : ""}>home</Link>
        <Link to='/' onClick={() => { setMenu("mobile-app"); handleScroll('app-download'); toggleMobileMenu(); }} className={menu === "mobile-app" ? "active" : ""}>mobile app</Link>
        <Link to='/' onClick={() => { setMenu("contact-us"); handleScroll('contact-us'); toggleMobileMenu(); }} className={menu === "contact-us" ? "active" : ""}>contact us</Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="dot"></div>
        </div>
        <Link to='/signin'><button>Sign In</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
