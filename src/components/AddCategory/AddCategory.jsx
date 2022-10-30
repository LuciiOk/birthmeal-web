import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SliderPicker } from "react-color";
import toast from "react-hot-toast";
import AxiosInstance from "../../utils/AxiosIntance";
import "./AddCategory.scss";

const AddCategory = ({ open, handelOpen }) => {
  const [name, setName] = React.useState("");
  const [color, setColor] = React.useState("#000000");
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const onSubmmit = async (e) => {
    try {
      e.preventDefault();
      const response = await AxiosInstance.post("/categories", {
        name,
        color,
      });
      toast.success("Categoria agregada correctamente");
    } catch (error) {
      toast.error("Error al agregar categoria");
    }
  };

  return (
    <div className="addCategory__container">
      <div className="addCategory__header">
        <h6 className="addCategory__title">Agregar Categoria</h6>
        <button
          className="addCategory__close"
          onClick={() => handelOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <form className="addCategory__form">
        <div className="addCategory__form__group">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addCategory__form__group">
          <label htmlFor="icon" className="form-label">
            Icono
          </label>
          <input type="text" name="icon" id="icon" className="form-input" />
        </div>
        <div className="addCategory__form__group">
          <label htmlFor="color" className="form-label">
            Color
          </label>
          <SliderPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
          <button
            type="button"
            style={{ backgroundColor: color }}
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="color-button"
          ></button>
        </div>
        <button className="addCategory__form__btn" onClick={onSubmmit}>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
