import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import AxiosInstance from "../utils/AxiosIntance";

const useCRUD = (urlPath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPerPage, setTotalPerPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

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

  const getDataByPage = useCallback(async () => {
    try {
      const { data: responseData } = await AxiosInstance.get(
        `${urlPath}?page=${page}&limit=9`
      );
      console.log(responseData);
      setData(responseData.data);
      setTotalPages(responseData.totalPages);
      setTotalPerPage(responseData.limit);
      setTotal(responseData.total);
      setPage(Number(responseData.page));
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener datos");
    }
  }, [page, urlPath]);

  useEffect(() => {
    getDataByPage();
  }, [getDataByPage]);

  return {
    data,
    addData,
    deleteData,
    updateData,
    loading,
    page,
    totalPages,
    setPage,
    total,
    totalPerPage,
  };
};

export default useCRUD;
