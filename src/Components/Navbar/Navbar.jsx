import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Estate Eyes</div>
        <input
          className="checkbox"
          type="checkbox"
          id="menu-toggle"
          checked={isOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <a>
              <Link to="/">Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/aboutus">About us</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/services">Services</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/contact">Contact Us</Link>
            </a>
          </li>
          <li className="signup">
            <Link to="/login" className="login-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
