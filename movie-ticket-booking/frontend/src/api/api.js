import axios from "axios";

const API = axios.create({
    baseURL: "http://52.200.176.69:8000",
    "http://127.0.0.0:8000",
    "http://13.222.219.142:8000",
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;
