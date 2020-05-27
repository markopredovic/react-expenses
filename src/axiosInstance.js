import axios from "axios";

import store from "./store";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_STRAPI_BASE_URL,
  timeout: 1000,
});

const addAuthorizationHeader = () => {
  // set headers
  const token = store.getState().token;

  axiosInstance.interceptors.request.use(
    function (config) {
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export { axiosInstance as default, addAuthorizationHeader };
