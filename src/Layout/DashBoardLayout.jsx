import React, { useState } from "react";
import Table from "../components/Table/Table";
import useCRUD from "../hooks/useCRUD";
import AddCategory from "../components/AddCategory/AddCategory";
import { Modal } from "@mui/material";
import ModalC from "../components/Modal/Modal";

const DashBoardLayout = ({ title, fields, urlPath }) => {
  const { data, addData, deleteData } = useCRUD(urlPath);
  const [open, setOpen] = useState(false);

  const handelModal = () => {
    setOpen(!open);
  };

  const handleAddData = (data) => {
    addData(data);
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="CRUD__header">
        <h3 className="CRUD__title">{title}</h3>
        <button className="CRUD__add" onClick={handelModal}>
          Agregar
        </button>
      </div>
      <div className="CRUD__body">
        <Table data={data} head={fields} onDelete={deleteData} />
      </div>
      <Modal open={open} onClose={handelModal}>
        <ModalC title="Agregar Categoria" handleOpen={handelModal}>
          <AddCategory onSubmit={handleAddData} />
        </ModalC>
      </Modal>
    </div>
  );
};

export default DashBoardLayout;
