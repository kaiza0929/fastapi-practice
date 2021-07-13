import axios from "axios";

const connect = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
    },
    responseType: "json"
});