import React from "react";
import "./AddCompany.scss";
import AxiosInstance from "../../utils/AxiosIntance";

// fields name, webUrl, description, category (select)
const AddCompany = ({ onSubmit, dataEdit }) => {
  const [name, setName] = React.useState(dataEdit?.name || "");
  const [webUrl, setWebUrl] = React.useState(dataEdit?.webUrl || "");
  const [description, setDescription] = React.useState(
    dataEdit?.description || ""
  );
  const [category, setCategory] = React.useState(dataEdit?.category._id || "");

  const [categories, setCategories] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, webUrl, description, category });
  };

  React.useEffect(() => {
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

  return (
    <form className="addCompany__form">
      <div className="addCompany__form__group">
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
      <div className="addCompany__form__group">
        <label htmlFor="webUrl" className="form-label">
          Url
        </label>
        <input
          type="text"
          name="webUrl"
          id="webUrl"
          className="form-input"
          value={webUrl}
          onChange={(e) => setWebUrl(e.target.value)}
        />
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          name="description"
          id="description"
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="addCompany__form__group">
        <label htmlFor="category" className="form-label">
          Categoría
        </label>
        <select
          name="category"
          id="category"
          className="form-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Seleccione una categoría</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <button className="addCompany__form__btn" onClick={handleSubmit}>
        Agregar
      </button>
    </form>
  );
};

export default AddCompany;
