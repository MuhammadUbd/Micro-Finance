import { toast } from 'react-hot-toast';
import apiClient from ".";


const getReq = async (path) => {
    try {
        const response = await apiClient.get(path)
        return response
    } catch (error) {
        console.log(error)
    }
}


const postReq = async (path, data, isFormData = false) => {
    try {
        const config = isFormData
            ? {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
            : {};

        const response = await apiClient.post(path, data, config);
        toast.success(response?.data?.message);
        return response;
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        console.log(error?.response);
    }
};



const deleteData = async (path) => {
    try {
        const response = await apiClient.delete(path)
        return response
    } catch (error) {
        console.log(error)
    }
}

const putReq = async (path, data) => {
    try {
        const response = await apiClient.put(path, data)
        return response
    } catch (error) {
        console.log(error)
    }
}

export { getReq, postReq, deleteData, putReq }