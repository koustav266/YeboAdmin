import axios from 'axios';
import { yeboClearLocal, yeboGetLocal, yeboStorageKeys } from '../../Utils/LocalStorage';
const axiosInstence = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})
let userDetails = yeboGetLocal(yeboStorageKeys.userDeatails);
// let clearDetails = yeboClearLocal();
// console.log("axiosInstaence", userDetails.access_token);
axiosInstence.defaults.headers = {
    'access_token': userDetails && userDetails.access_token,
    'accept': 'application/json',
    'accept-language': 'en_US',
    'content-type': 'application/problem+json; charset=utf-8'
}
axiosInstence.interceptors.request.use(
    (request) =>
        new Promise((resolve, reject) => {
            resolve(request);
        }),
    (error) => {
        if (!error.request) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
        if (error.request.status === 401) {
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    }
);

export default axiosInstence