import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Sidebar.scss";


const Sidebar = () => {
  const navigate = useNavigate();

  const {
    logout
  } = useContext(AuthContext)

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/admin/companies" className="link">Establecimientos</Link>
        </li>
        <li>
          <Link to="/admin/categories" className="link">Categorias</Link>
        </li>
      </ul>
      <div className="logout">
        <button className="btn" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Sidebar;
