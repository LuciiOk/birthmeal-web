import React from "react";
import { SliderPicker } from "react-color";
import { useForm } from "react-hook-form";

import "./AddCategory.scss";

import IconPicker from "../IconPicker/IconPicker";

const AddCategory = ({ onSubmit, dataEdit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: dataEdit,
    mode: "all",
  });
  const [icon, setIcon] = React.useState(dataEdit?.icon || "");
  const [color, setColor] = React.useState(dataEdit?.color || "#000000");
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const send = (data) => {
    if (!color || !icon) {
      return;
    }
    onSubmit({ ...data, color, icon });
  };

  return (
    <form className="addCategory__form" onSubmit={handleSubmit(send)}>
      <div className="addCategory__form__group">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          placeholder="Nombre de la categoria"
          {...register("name", {
            required: "El nombre es requerido",
          })}
        />
        {errors.name && (
          <span className="form-error">{errors.name.message}</span>
        )}
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
      <button className="addCategory__form__btn">
        {dataEdit ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default AddCategory;
