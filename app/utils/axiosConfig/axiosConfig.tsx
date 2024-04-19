"use client";

import { logOut, refreshUser } from "@/app/redux/loggingSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ConfigureAxiosInstance = () => {
  const dispatch = useDispatch();
  const authName = "65d6e54dd2d038abc102b4b2";
  const authPass = "897cf996-ec96-4707-9c4d-2f25d64565be";
  const base64Credentials = btoa(authName + ":" + authPass);
  const axiosInstance = axios.create({
    baseURL: "https://beta-api.pattern50.com",
  });
  const router = useRouter();
  const user = useSelector((state) => state.logging.data);
  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user]);

  axiosInstance.interceptors.request.use(
    (config) => {
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

  const refreshToken = async () => {
    const token = localStorage.getItem("refresh");

    // if (token) {
    const response = await axiosInstance.post("/auth/sign-in", {
      refreshToken: token,
      grantType: "refreshToken",
    });
    return response;
    // }
    // return { error: { message: "token is empty" } };
  };

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (
        error.response.data.status == 401 &&
        !error.config.url.includes("sign-in")
      ) {
        try {
          const res: any = await refreshToken();
          if (res) {
            localStorage.setItem("token", res.data.auth.accessToken);
            localStorage.setItem("refresh", res.data.auth.refreshToken);
            dispatch(refreshUser(res.data.user));
          } else {
            dispatch(logOut());
          }
        } catch (refreshError) {
          console.error("Error refreshing token:", refreshError);
          throw refreshError;
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default ConfigureAxiosInstance;
