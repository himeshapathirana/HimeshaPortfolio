import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Himesha Pathirana</p>
        <p>Contact: <span className="contact-info">pathiranathimesha2021@gmail.com</span></p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/himeshapathirana" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/himesha-pathirana-aa3659214" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;