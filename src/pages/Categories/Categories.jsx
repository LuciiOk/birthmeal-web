import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="container">
      <div className="categories__header">
        <h3 className="categories__title">Categories</h3>
        <button className="categories__add">Agregar</button>
      </div>
      <div className="categories__body">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Icono</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dom</td>
              <td>6000</td>
              <td>
                <button className="categories__edit">Editar</button>
                <button className="categories__delete">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>Melissa</td>
              <td>5150</td>
              <td>
                <button className="categories__edit">Editar</button>
                <button className="categories__delete">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
