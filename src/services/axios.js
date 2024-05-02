import axios from "axios";

const apiURL = "https://tourismapp-lice.onrender.com/";

export const axiosInstance = await axios.create({
  baseURL: apiURL,
});
