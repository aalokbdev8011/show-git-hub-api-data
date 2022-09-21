import axios, { AxiosError } from "axios";


export class config {
    static baseURL = process.env.REACT_APP_URL;
}

axios.defaults.baseURL = config.baseURL;

export const axiosSetup = () => {
    const onResponseSuccess = (response: any) => response;
    const onResponseError = (err: AxiosError) => {
        const status = err.status || (err.response ? err.response.status : 0);
        if (status === 401) {
            console.log(err)
        } else if (status === 404) {
            console.log(err)
        }
        return Promise.reject(err);
    };
    axios.interceptors.response.use(onResponseSuccess, onResponseError);
};
