import React, { useEffect, useState, forwardRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./AddCompany.scss";
import AxiosInstance from "../../utils/AxiosIntance";
import LocationsStep from "./LocationStep";
import FormStep from "./FormStep";

const AddCompany = ({ onSubmit, dataEdit }) => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
    setError,
    control,
  } = useForm({
    defaultValues: {
      name: dataEdit?.name,
      webUrl: dataEdit?.webUrl,
      category: dataEdit?.category._id,
      description: dataEdit?.description,
      benefits: dataEdit?.benefits.map((benefit) => ({ name: benefit })),
      logo: dataEdit?.imageUrl,
    },
    mode: "all",
    reValidateMode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "benefits",
  });

  const [locations, setLocations] = useState([]);

  const onNextStep = () => {
    // validate if theres is a logo uploaded
    if (getValues().logo.length === 0 && dataEdit?.imageUrl === undefined) {
      setError("logo", {
        type: "manual",
        message: "Debe subir un logo",
      });
      return;
    }
    if (isValid) {
      setStep(step + 1);
      return;
    }
  };

  const onPrevStep = () => {
    setStep(step - 1);
  };

  const onSubmitData = async (data) => {
    try {
      const companyData = {
        ...data,
        locations,
        benefits: data.benefits.map((benefit) => benefit.name),
      };

      if (data.logo[0] && data.logo[0].name) {
        const image = new File([data.logo[0]], "logo.png", {
          type: "image/png",
        });

        const formData = new FormData();
        formData.append("file", image);
        const { data: imageUrl } = await AxiosInstance.post("imgur", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        companyData.imageUrl = imageUrl;
      }
      onSubmit(companyData);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocations = async () => {
    const response = await AxiosInstance.get(`location/${dataEdit.id}`);
    setLocations(response.data);
  };

  useEffect(() => {
    if (dataEdit) {
      getLocations();
    }
  }, [dataEdit]);

  return (
    <form className="addCompany__form" onSubmit={handleSubmit(onSubmitData)}>
      {step === 1 && (
        <FormStep
          {...{ register, errors, onNextStep }}
          {...{ fields, append, remove }}
        />
      )}
      {step === 2 && (
        <LocationsStep
          locations={locations}
          setLocations={setLocations}
          name={dataEdit?.name || getValues("name")}
        />
      )}
      <div className="addCompany__form__actions">
        {step === 1 && (
          <button
            className="btn__next"
            type="button"
            onClick={onNextStep}
          >
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
            {dataEdit ? "Actualizar" : "Guardar"}
          </button>
        )}
      </div>
    </form>
  );
};

export default AddCompany;
