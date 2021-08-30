"use strict";

import axios from "axios";
import store from "@/store";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.NODE_ENV !== "production" ? "/api/" : "/api/",
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  (config) => {
    const token = store.getters["auth/jwt"];
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default {
  install: (app) => {
    app.config.globalProperties.axios = _axios;
    app.config.globalProperties.$axios = _axios;
  },
};

export const axiosInstance = _axios;
