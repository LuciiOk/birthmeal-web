import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import CompanyModal from "../pages/Companies/Company";

const RoutesC = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        {isAuth && <Route path="company" element={<CompanyModal />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesC;
