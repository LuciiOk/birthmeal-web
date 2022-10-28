import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="#about" className="navbar__link" >
            Sobre nosotros
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="#contact" className="navbar__link" >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
