import axios from "axios";

const axiosApi = axios.create({
 baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3030",
});

export default axiosApi;
