import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Ajuste conforme necessário
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
