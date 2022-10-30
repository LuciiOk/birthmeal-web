import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Companies from "../pages/Companies/Companies";
import Layout from "../Layout/Layout";
import Categories from "../pages/Categories/Categories";

const RoutesC = () => {
  const { userAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {!userAuth() && <Route path="/login" element={<Login />} />}
        {userAuth() && (
          <Route path="/login" element={<Navigate to="/admin" />} />
        )}
        <Route path="*" element={<NotFound />} />
        {userAuth() && (
          <Route path="admin/" element={<Layout />}>
            <Route path="companies" element={<Companies />} />
            <Route path="categories" element={<Categories />} />
            <Route path="" element={<Navigate to="companies" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesC;
