import axios from "axios";
import { BASE_URL } from "../constants/Api";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

AxiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// replace all data response _id to id
AxiosInstance.interceptors.response.use(
  (response) => {
    // verify if response is array
    if (Array.isArray(response.data)) {
      response.data.map((item) => {
        item.id = item._id;
        delete item._id;
      });
    } else if (response.data._id) {
      response.data.id = response.data._id;
      delete response.data._id;
    }
    if (response.data.data) {
      response.data.data.map((item) => {
        item.id = item._id;
        delete item._id;
      });
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
