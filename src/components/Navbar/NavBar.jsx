import React from "react";
import "./NavBar.scss";
import logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about-us" className="navbar__link">
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="/companies" className="navbar__link">
            Companies
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
