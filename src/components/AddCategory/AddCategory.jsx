import React from "react";
import "./AddCategory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { GithubPicker } from "react-color";


const AddCategory = ({ open, handelOpen }) => {
  return (
    <div className="addCategory__container">
      <div className="addCategory__header">
        <h6 className="addCategory__title">Agregar Categoria</h6>
        <button className="addCategory__close" onClick={() => handelOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <form className="addCategory__form">
        <div className="addCategory__form__group">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" name="name" id="name" className="form-input" />
        </div>
        <div className="addCategory__form__group">
          <label htmlFor="icon" className="form-label">Icono</label>
          <input type="text" name="icon" id="icon" className="form-input" />
        </div>
        <div className="addCategory__form__group">
          <label htmlFor="color" className="form-label">Color</label>
          <GithubPicker className="github__picker" />
        </div>
          <button className="addCategory__form__btn">Agregar</button>
      </form>
    </div>
  );
};

export default AddCategory;
