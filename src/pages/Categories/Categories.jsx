import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import toast from "react-hot-toast";
import AddCategory from "../../components/AddCategory/AddCategory";
import "./Categories.scss";
import AxiosInstance from "../../utils/AxiosIntance";
import Table from "../../components/Table/Table";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handelModal = () => {
    setOpen(!open);
  };

  const getCategories = async () => {
    try {
      const response = await AxiosInstance.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener categorias");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const fields = [
    {
      name: "Nombre",
      key: "name",
    },
    {
      name: "Color",
      key: "color",
    },
  ];

  return (
    <div className="container">
      <div className="categories__header">
        <h3 className="categories__title">Categorias</h3>
        <button className="categories__add" onClick={() => setOpen(true)}>
          Agregar Categoria
        </button>
      </div>
      <div className="categories__body">
        <Table data={categories} head={fields} />
      </div>
      <Modal open={open} onClose={handelModal}>
        <AddCategory handelOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default Categories;
