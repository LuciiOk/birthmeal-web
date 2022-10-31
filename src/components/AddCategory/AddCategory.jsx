import React from "react";
import { SliderPicker } from "react-color";
import "./AddCategory.scss";

const AddCategory = ({ onSubmit }) => {
  const [name, setName] = React.useState("");
  const [color, setColor] = React.useState("#000000");
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const handleSubmmit = (e) => {
    e.preventDefault();
    onSubmit({ name, color });
  };

  return (
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
        <SliderPicker color={color} onChange={(color) => setColor(color.hex)} />
        <button
          type="button"
          style={{ backgroundColor: color }}
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="color-button"
        ></button>
      </div>
      <button className="addCategory__form__btn" onClick={handleSubmmit}>
        Agregar
      </button>
    </form>
  );
};

export default AddCategory;
