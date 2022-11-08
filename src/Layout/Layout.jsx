import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Sidebar from "../components/SideBar/Sidebar";

const Layout = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <AdminNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="layout">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="layout__content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
