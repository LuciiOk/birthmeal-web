import React from "react";
import DashBoardLayout from "../../Layout/DashBoardLayout";

const Categories = () => {
  const fields = [
    { name: "Nombre", key: "name" },
    { name: "Color", key: "color" },
  ];

  return (
    <div className="container">
      <DashBoardLayout
        title="Categorias"
        fields={fields}
        urlPath="categories"
      />
    </div>
  );
};

export default Categories;
