import React, { useState, useEffect } from "react";
import AxiosInstance from "../../utils/AxiosIntance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const FormStep = ({
  register,
  errors,
  fields,
  append,
  remove,
  dataEdit,
  watch,
}) => {
  const [categories, setCategories] = useState([]);
  const addBenefit = () => {
    append({ name: "" });
  };

  const removeBenefit = (index) => {
    remove(index);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await AxiosInstance.get("/categories");
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
    if (fields.length === 0) {
      addBenefit();
    }
  }, []);

  if (!categories.length) {
    return null;
  }

  const convertToImage = (file) => {
    if (file && file.length > 0 && file[0].name) {
      return URL.createObjectURL(file[0]);
    }
    return dataEdit?.imageUrl || logo;
  };

  return (
    <React.Fragment>
      <div className="addCompany__form__group">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="form-error">{errors.name.message}</span>
        )}
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="webUrl" className="form-label">
          Url
        </label>
        <input
          type="url"
          name="webUrl"
          id="webUrl"
          className="form-input"
          {...register("webUrl", { required: true, pattern: /^https?:\/\// })}
        />
        {errors.webUrl && (
          <span className="form-error">{errors.webUrl.message}</span>
        )}
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="category" className="form-label">
          Categoría
        </label>
        <select
          name="category"
          id="category"
          className="form-input"
          {...register("category", { required: true })}
        >
          <option value="">Seleccione una categoría</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="form-error">{errors.category.message}</span>
        )}
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          name="description"
          id="description"
          className="form-input"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="form-error">{errors.description.message}</span>
        )}
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="logo" className="form-label">
          Logo
        </label>
        <div className="addCompany__form__group__logo">
          <img
            src={convertToImage(watch("logo")) || logo}
            referrerPolicy="no-referrer"
          />
          <input
            type="file"
            accept="image/*"
            name="logo"
            id="logo"
            {...register("logo")}
          />
        </div>
        {errors.logo && (
          <span className="form-error">{errors.logo.message}</span>
        )}
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="benefits" className="form-label">
          Requisitos
        </label>
        <button type="button" className="btn__add" onClick={addBenefit}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div className="benefits__inputs__container">
          {fields.map((item, index) => (
            <div key={item.id} className="benefits__input__container">
              <div className="addCompany__form__group__benefit">
                <input
                  type="text"
                  name={`benefits[${index}].name`}
                  id={`benefits[${index}].name`}
                  className="form-input"
                  {...register(`benefits[${index}].name`, { required: true })}
                />
                <button
                  type="button"
                  className="btn__remove"
                  onClick={() => removeBenefit(index)}
                  disabled={fields.length === 1}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              {errors.benefits && (
                <span className="form-error">
                  {errors.benefits[index]?.name?.message}
                </span>
              )}
            </div>
          ))}
          {errors.benefits && (
            <span className="form-error">{errors.benefits.message}</span>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormStep;
