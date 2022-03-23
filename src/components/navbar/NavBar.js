import React from "react";
import { FaBars } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import "./Navbar.css";

const NavBar = () => {
  return (
    <section className="navbar">
      <div className="wrapper">
        <p className="logo  ">
          food <span>joint</span>
        </p>

        <div className="bars">
          <FaBars />
        </div>
      </div>

      <div className="nav-list">
        <a href="#menu">
          <p>meals</p>
        </a>
        <a href="#about">
          <p>about us</p>
        </a>
        <a href="#contact">
          <p>contact</p>
        </a>
      </div>

      <div className="number">
        <span>
          <IoCall />
        </span>
        <p>+233 5438449383</p>
      </div>
    </section>
  );
};

export default NavBar;
