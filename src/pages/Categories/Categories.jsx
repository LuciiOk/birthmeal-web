import React from "react";
import DashBoardLayout from "../../Layout/DashBoardLayout";

const Categories = () => {
  const fields = [
    { name: "Nombre", key: "name" },
    { name: "Color", key: "color" },
    { name: "Icono", key: "icon" },
  ];

  return (
    <div className="container">
      <DashBoardLayout
        title="Categorias"
        fields={fields}
        urlPath="categories/paginate"
      />
    </div>
  );
};

export default Categories;
