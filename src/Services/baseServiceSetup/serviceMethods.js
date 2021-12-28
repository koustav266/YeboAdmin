
import axiosInstence from "./index";
export const getRequest = async (url) => {
    try {
        const response = await axiosInstence.get(url);
        console.log('getRequest request==>', response);
        return response
    } catch (error) {
        console.log('getRequest error==>', error);
    }
}

export const postRequest = async (url, data) => {
    try {
        const response = await axiosInstence.post(url, data);
        console.log('postRequest response==>', response);
        return response;
    } catch (error) {
        console.log('postRequest  error==>', error.response);
        return error;
    }
}
export const putRequest = async (url, data) => {
    try {
        const response = await axiosInstence.put(url, data);
        console.log('putRequest response==>', response);
        return response;
    } catch (error) {
        console.log('putRequest  error==>', error.response);
        return error;
    }
}
export const deleteReqest = async (url, data) => {
    try {
        const response = await axiosInstence.delete(url, data);
        console.log('deleteRequest response==>', response);
        return response;
    } catch (error) {
        console.log('deleteRequest error==>', error)
    }
}