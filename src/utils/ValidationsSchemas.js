import * as Yup from "yup";

export const AddCompanySchema = Yup.object().shape({
  name: Yup.string().required("El nombre de la empresa es requerido"),
  webUrl: Yup.string()
    .required("La URL de la empresa es requerida")
    .url("La URL de la empresa no es válida")
    .matches(
      /^(http|https):\/\/[a-zA-Z0-9-_.]+$/,
      "La URL de la empresa no es válida"
    ),
  category: Yup.string().required("La categoría de la empresa es requerida"),
  description: Yup.string().required(
    "La descripción de la empresa es requerida"
  ),
  logo: Yup.mixed()
    .required("El logo de la empresa es requerido")
    .test(
      "fileFormat",
      "El logo de la empresa debe ser un archivo PNG o JPEG",
      (value) => {
        const [file] = value;
        if (file) {
          const { type } = file;
          return type === "image/png" || type === "image/jpeg";
        }
        return true;
      }
    )
    .test("fileSize", "El logo de la empresa es muy pesado", (value) => {
      const [file] = value;
      if (file) {
        const { size } = file;
        return size <= 1000000;
      }
      return true;
    }),
  // benefits its and array of objects, verify if the array is empty and verify each object
  benefits: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("El nombre del beneficio es requerido"),
      })
    )
    .min(1, "La empresa debe tener al menos un beneficio"),
});

export const AddCategorySchema = Yup.object().shape({
  name: Yup.string().required("El nombre de la categoría es requerido"),
  icon: Yup.string().required("El icono de la categoría es requerido"),
  color: Yup.string()
    .required("El color de la categoría es requerido")
    .matches(
      /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      "El color de la categoría no es válido"
    ),
});
