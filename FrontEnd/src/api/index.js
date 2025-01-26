import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8000/api",
    timeout: 6000,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
    } else {
        config.headers["Content-Type"] = "application/json";
    }

    return config;
});

// Response interceptor to handle errors
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log("Unauthorized!");
            // Optionally, you can redirect the user to the login page if unauthorized
            // window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default apiClient;
