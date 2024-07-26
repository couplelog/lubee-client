import { useEffect } from "react";

import api from "@common/api/api";

import { getToken } from "login/utils/token";

const useSetInterceptors = () => {
  useEffect(() => {
    api.interceptors.request.use((config) => {
      const accessToken = getToken();
      if (accessToken) {
        config.headers["Authorization"] = accessToken;
      }
      return config;
    });
  }, []);
};
export default useSetInterceptors;
