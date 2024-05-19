import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-column">
            <h2>Estate Eyes</h2>
          </div>
          <div className="footer-column">
            <ul>
              <li>
                <a>
                  <Link to="/terms">Terms and conditions</Link>
                </a>
              </li>

              <li>
                <a>
                  <Link to="/privacy">Privacy Policy</Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
