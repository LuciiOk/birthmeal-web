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
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {!isAuth && <Route path="/login" element={<Login />} />}
        {isAuth && <Route path="/login" element={<Navigate to="/admin" />} />}
        <Route path="*" element={<NotFound />} />
        {isAuth && (
          <Route path="admin/" element={<Layout />}>
            <Route path="companies" element={<Companies />} />
            <Route path="categories" element={<Categories />} />
            <Route path="" element={<Navigate to="companies" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
        {!isAuth && (
          <Route path="/admin/*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesC;
