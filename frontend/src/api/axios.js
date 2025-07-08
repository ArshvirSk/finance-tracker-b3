import axios from "axios";

const instance = axios.create({
  baseURL: "https://finance-tracker-server-bb9f.onrender.com", // Update if hosted elsewhere
});

export default instance;
