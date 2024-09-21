import axios from "axios";

export const axiosServerAPIClient = axios.create({
  baseURL: process.env.API_ENDPOINT,
});
