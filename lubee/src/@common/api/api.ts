import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNjE3OTk4MjU1IiwiYXV0aCI6IlVTRVIiLCJleHAiOjE3MjE5MDMxODksImlhdCI6MTcyMTcyMzE4OX0.xKmyQrOVF84t_rwXthGVNtOMxYCRKZSqCAhtfoDTR0g",
  },
});

export default api;
