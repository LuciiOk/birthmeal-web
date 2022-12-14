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
    .test("required", "El logo de la empresa es requerido", (value) => {
      return value && value.length > 0;
    })
    .test(
      "fileFormat",
      "El logo de la empresa debe ser un archivo PNG o JPEG",
      (value) => {
        if (value) {
          if (typeof value === "string" && value.startsWith("http")) {
            return true;
          }

          const [file] = value;
          return file?.type === "image/png" || file?.type === "image/jpeg";
        }
        return false;
      }
    )
    .test("fileSize", "El logo de la empresa es muy pesado", (value) => {
      if (value) {
        if (typeof value === "string" && value.startsWith("http")) {
          return true;
        }
        const [file] = value;
        return file?.size <= 2000000;
      }
      return false;
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

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email no es válidoS")
    .required("El email es requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});
