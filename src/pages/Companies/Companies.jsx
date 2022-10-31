import React from "react";
import "../../App.scss";

import DashBoardLayout from "../../Layout/DashBoardLayout";

function Companies() {
  const fields = [
    { name: "Nombre", key: "name" },
    { name: "Website", key: "webUrl" },
    { name: "Categoria", key: "category", key2: "name" },
  ];

  return (
    <DashBoardLayout
      title="Establecimientos"
      fields={fields}
      urlPath="companies"
    />
  );
}

export default Companies;
