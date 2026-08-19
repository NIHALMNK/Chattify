import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("VITE_API_URL environment variable is missing. Please define it in your .env file.");
}

export const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api`,
  withCredentials: true,
});
