import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddCompany.scss";
import AxiosInstance from "../../utils/AxiosIntance";
import LocationsStep from "./LocationStep";

const AddCompany = ({ onSubmit, dataEdit }) => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      name: dataEdit?.name,
      webUrl: dataEdit?.webUrl,
      category: dataEdit?.category._id,
      description: dataEdit?.description,
    },
    mode: "all",
  });
  const [locations, setLocations] = useState([]);

  const onNextStep = () => {
    setStep(step + 1);
  };

  const onPrevStep = () => {
    setStep(step - 1);
  };

  const onSubmitData = (data) => {
    onSubmit({ ...data, locations });
  };

  return (
    <form className="addCompany__form" onSubmit={handleSubmit(onSubmitData)}>
      {step === 1 && <FormStep {...{ register, errors, onNextStep }} />}
      {step === 2 && (
        <LocationsStep
          locations={locations}
          setLocations={setLocations}
          name={dataEdit?.name || getValues("name")}z
        />
      )}
      <div className="addCompany__form__actions">
        {step === 1 && (
          <button className="btn__next" type="button" onClick={onNextStep}>
            Siguiente
          </button>
        )}
        {step === 2 && (
          <button className="btn__prev" type="button" onClick={onPrevStep}>
            Anterior
          </button>
        )}
        {step === 2 && (
          <button className="btn__save" type="submit">
            Guardar
          </button>
        )}
      </div>
    </form>
  );
};

const FormStep = ({ register, errors, onNextStep }) => {
  const [categories, setCategories] = useState([]);

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
          type="text"
          name="webUrl"
          id="webUrl"
          className="form-input"
          {...register("webUrl", { required: true })}
        />
        {errors.webUrl && (
          <span className="form-error">La url es requerida</span>
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
    </React.Fragment>
  );
};

export default AddCompany;
