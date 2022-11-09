import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Sidebar.scss";


const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const {
    logout
  } = useContext(AuthContext)

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/admin/companies" className="link">
            <FontAwesomeIcon icon={faBuilding} />
            <span>Establecimientos</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/categories" className="link">
            <FontAwesomeIcon icon={faBoxOpen} />
            <span>Categorías</span>
          </Link>
        </li>
      </ul>
      <div className="logout">
        <button className="btn" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Sidebar;
