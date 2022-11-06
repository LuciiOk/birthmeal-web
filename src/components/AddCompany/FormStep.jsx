import React, { useState, useEffect } from "react";
import AxiosInstance from "../../utils/AxiosIntance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const FormStep = ({ register, errors, fields, append, remove }) => {
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
  }, []);

  if (!categories.length) {
    return null;
  }

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
          <span className="form-error">El nombre es requerido</span>
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
          <span className="form-error">La url es requerida</span>
        )}
        {errors.webUrl?.type === "pattern" && (
          <span className="form-error">
            La url debe empezar con http:// o https://
          </span>
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
          <span className="form-error">La categoría es requerida</span>
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
          <span className="form-error">La descripción es requerida</span>
        )}
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="logo" className="form-label">
          Logo
        </label>
        <input
          type="file"
          name="logo"
          id="logo"
          className="form-input"
          {...register("logo")}
        />
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="benefits" className="form-label">
          Beneficios
        </label>
        <button type="button" className="btn__add" onClick={addBenefit}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div className="benefits__inputs__container">
          {fields.map((item, index) => (
            <div key={item.id} className="addCompany__form__group__benefit">
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
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ))}
        </div>
      </div>
      {errors.logo && <span className="form-error">El logo es requerido</span>}
    </React.Fragment>
  );
};

export default FormStep;
