import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    //Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
});

export default api;
