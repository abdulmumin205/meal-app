import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <p className="logo  ">
          food <span>joint</span>
        </p>
      </div>
      <div className="footer-links">
        <a href="#menu">
          <p>meals</p>
        </a>
        <a href="#about">
          <p>about us</p>
        </a>
        <a href="#contact">
          {" "}
          <p>contact</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
