import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chattify-k2zj.onrender.com/api/",
  withCredentials: true,
});
