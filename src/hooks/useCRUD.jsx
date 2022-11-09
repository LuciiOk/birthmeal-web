import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import AxiosInstance from "../utils/AxiosIntance";

const useCRUD = (urlPath) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const { data: responseData } = await AxiosInstance.get(urlPath);
      setData(responseData);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener datos");
    }
  };

  const addData = async (newData) => {
    try {
      const { data: dataResponse } = await AxiosInstance.post(
        `${urlPath}`,
        newData
      );
      setData((prev) => [...prev, dataResponse]);
      toast.success("Datos agregados correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al agregar datos");
    }
  };

  const deleteData = async (id) => {
    try {
      await AxiosInstance.delete(`${urlPath}/${id}`);
      setData(data.filter((item) => item.id !== id));
      toast.success("Eliminado correctamente");
    } catch (error) {
      const { data: errorResponse } = error.response;
      toast.error(errorResponse.message);
    }
  };

  const updateData = async (id, newData) => {
    try {
      const { data: dataResponse } = await AxiosInstance.put(
        `${urlPath}/${id}`,
        newData
      );
      setData((prev) =>
        prev.map((item) => (item.id === id ? dataResponse : item))
      );
      toast.success("Datos actualizados correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al actualizar datos");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, addData, deleteData, updateData };
};

export default useCRUD;
