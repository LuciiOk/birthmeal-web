import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { isAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {/* <li className="navbar__item">
          <Link to="#about" className="navbar__link">
            Sobre nosotros
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="#contact" className="navbar__link">
            Contacto
          </Link>
        </li> */}
      </ul>
      {isAuth && (
        <button className="navbar__button" onClick={() => navigate("/admin")}>
          Admin
        </button>
      )}
    </nav>
  );
};

export default NavBar;
