import React from "react";
import { SliderPicker } from "react-color";
import "./AddCategory.scss";

import IconPicker from "../IconPicker/IconPicker";

const AddCategory = ({ onSubmit, dataEdit }) => {
  const [name, setName] = React.useState(dataEdit?.name || "");
  const [icon, setIcon] = React.useState(dataEdit?.icon || "");
  const [color, setColor] = React.useState(dataEdit?.color || "#000000");
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const handleSubmmit = (e) => {
    e.preventDefault();
    console.log({ name, icon, color });
    onSubmit({ name, color, icon });
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
        <label htmlFor="color" className="form-label">
          Color
        </label>
        <SliderPicker color={color} onChange={(color) => setColor(color.hex)} />
        <button
          type="button"
          style={{ backgroundColor: color }}
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="color-button"
        >
          {color}
        </button>
      </div>
      <div className="addCategory__form__group">
        <label htmlFor="icon" className="form-label">
          Icono
        </label>
        <IconPicker color={color} onChange={setIcon} iconName={icon} />
      </div>
      <button className="addCategory__form__btn" onClick={handleSubmmit}>
        Agregar
      </button>
    </form>
  );
};

export default AddCategory;
