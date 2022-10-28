import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Companies from "../pages/Companies/Company";
import Layout from "../Layout/Layout";

const RoutesC = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="admin" element={<Layout />} >
          <Route path="companies" element={<Companies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesC;
