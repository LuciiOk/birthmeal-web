import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import toast from "react-hot-toast";
import AddCategory from "../../components/AddCategory/AddCategory";
import "./Categories.scss";
import AxiosInstance from "../../utils/AxiosIntance";

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

  return (
    <div className="container">
      <div className="categories__header">
        <h3 className="categories__title">Categorias</h3>
        <button className="categories__add" onClick={() => setOpen(true)}>
          Agregar Categoria
        </button>
      </div>
      <div className="categories__body">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Icono</th>
              <th>Color</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>{category.icon}</td>
                <td>{category.color}</td>
                <td>
                  <button className="categories__edit">Editar</button>
                  <button className="categories__delete">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={open} onClose={handelModal}>
        <AddCategory handelOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default Categories;
