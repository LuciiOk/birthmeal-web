import React, { useState } from "react";
import Table from "../components/Table/Table";
import useCRUD from "../hooks/useCRUD";
import AddCategory from "../components/AddCategory/AddCategory";
import AddCompany from "../components/AddCompany/AddCompany";
import { Modal } from "@mui/material";
import ModalC from "../components/Modal/Modal";

const DashBoardLayout = ({ title, fields, urlPath }) => {
  const { data, addData, deleteData, updateData } = useCRUD(urlPath);
  const [open, setOpen] = useState(false);
  const [dataEdit, setDataEdit] = useState(null);

  const onClose = () => {
    setOpen(false);
    setDataEdit(null);
  };

  const onEdit = (id) => {
    setOpen(true);
    setDataEdit(data.find((item) => item.id === id));
  };

  const onSubmit = (data) => {
    if (dataEdit) {
      updateData(dataEdit.id, data);
    } else {
      addData(data);
    }
    onClose();
  };

  return (
    <div className="container">
      <div className="CRUD__header">
        <h3 className="CRUD__title">{title}</h3>
        <button className="CRUD__add" onClick={() => setOpen(true)}>
          Agregar
        </button>
      </div>
      <div className="CRUD__body">
        <Table
          data={data}
          head={fields}
          onDelete={deleteData}
          onEdit={onEdit}
        />
      </div>
      <Modal open={open} onClose={onClose}>
        <ModalC
          onClose={onClose}
          title={dataEdit ? "Editar" : "Agregar"}
          width={urlPath === "companies" ? "600px" : "400px"}
        >
          {urlPath === "categories" && (
            <AddCategory onSubmit={onSubmit} dataEdit={dataEdit} />
          )}
          {urlPath === "companies" && (
            <AddCompany onSubmit={onSubmit} dataEdit={dataEdit} />
          )}
        </ModalC>
      </Modal>
    </div>
  );
};

export default DashBoardLayout;
