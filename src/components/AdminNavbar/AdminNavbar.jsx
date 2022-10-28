import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import "./AdminNavbar.scss";

const AdminNavbar = () => {
  return (
    <nav className="admin__navbar">
      <div className="logo__navbar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="open__sidebar">
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
