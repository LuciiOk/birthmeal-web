import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import "./AdminNavbar.scss";

const AdminNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="admin__navbar">
      <div className="logo__navbar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="open__sidebar" onClick={() => setIsOpen(!isOpen)}>
        <button>
          <FontAwesomeIcon icon={!isOpen ? faBars : faTimes} />
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
