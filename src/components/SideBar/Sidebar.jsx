import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/admin/companies" className="link">Companies</Link>
        </li>
      </ul>
      <div className="logout">
        <button className="btn">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
