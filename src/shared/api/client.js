import axios from "axios";

const API_BASE_URL = "https://strapi-store-server.onrender.com/api";

export const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
