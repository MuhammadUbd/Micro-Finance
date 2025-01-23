import axios from "axios"

const apiClient = axios.create({
    baseURL: "http://localhost:8000/api",
    timeout: 6000,
})

apiClient.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
    } else {
        config.headers["Content-Type"] = "application/json";
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log("Unauthorized!");
        }
        return Promise.reject(error)
    }
)

export default apiClient