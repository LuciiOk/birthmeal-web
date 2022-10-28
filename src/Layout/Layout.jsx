import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Sidebar from "../components/SideBar/Sidebar";

const Layout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
