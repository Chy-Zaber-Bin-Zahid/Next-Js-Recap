"use client";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.0.168:5000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authName = "65d6e54dd2d038abc102b4b2";
    const authPass = "897cf996-ec96-4707-9c4d-2f25d64565be";
    const base64Credentials = btoa(authName + ":" + authPass);

    const path = config.url;

    if (path === "/auth/sign-in") {
      config.headers.Authorization = `Basic ${base64Credentials}`;
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Content-Type"] = "application/json";
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((res) => {
  return res
},
  async (error) => {
      if (error.status == 401) {
          console.log('401 error encountered', error);
      }
  }

)

export default axiosInstance;
