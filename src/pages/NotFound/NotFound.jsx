import React from "react";
import './NotFound.scss';
import img404 from "../../assets/images/Burger-404.png";

const NotFound = () => {
  return (
    <div className="notfound__container">
      <img src={img404} alt="404" className="notfound__img" />
      <h2>404</h2>
      <h3>Lo sentimos, la página que buscas no existe.</h3>
    </div>
  );
};

export default NotFound;
