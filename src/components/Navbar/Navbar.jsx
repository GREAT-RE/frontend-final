import React, { useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/HOMEINLX.svg';
import loginLogo from '../../assets/loginIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <div className="top-nav">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="logoNav" />
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" checked={menuOpen} onChange={handleMenuClick} />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link to="/property-list" className="propertyMenu" onClick={handleMenuItemClick}>
            List Your Property
          </Link>
        </li>
        <li>
          <Link to="/offers-promo" className="promotionsMenu" onClick={handleMenuItemClick}>
            Offers & Promotions
          </Link>
        </li>
        <li>
          <Link to="/register/login" className="loginLogo" onClick={handleMenuItemClick}>
            <img src={loginLogo} className="logoPic" alt="" />
            Login
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="loginLogo" onClick={handleMenuItemClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
