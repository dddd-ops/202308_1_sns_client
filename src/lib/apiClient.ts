import axios from "axios";

const apiClient = axios.create({
    // baseURL: "http://localhost:10000/api",
   baseURL: "http://localhost:10000/api" , 
    headers:{
        "Content-Type": "application/json",
    },
});

export default apiClient;


//baseURL: "http://localhost:8000/api" || process.env.NEXT_PUBLIC_API_BASEURL,