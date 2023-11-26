import axios from 'axios'
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config.js'
import { getType } from '../utils/common.js';

const API_URL = 'http://localhost:8000'

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 100000,
})

axiosInstance.interceptors.request.use(
    function (config) {
        {
            if (config.TYPE.params) {
                config.params = config.TYPE.params
            } else if (config.TYPE.query) {
                config.url = config.url + '/' + config.TYPE.query
            }
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response);
    },
    function (error) {
        return Promise.reject(processError(error));
    }
);

const processResponse = (response) => {
    return response.data
}

const processError = (error) => {
    if (error.response) {
        return error.response
    } else if (error.request) {
        return error.response
    } else {
        return {
            success: false,
            message: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}
const API = {}

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body) => {
        return axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            headers: value.headers,
            TYPE: getType(value, body),
        });
    };
}

export { API }