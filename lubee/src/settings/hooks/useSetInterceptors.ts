import { useLayoutEffect } from "react";

import api from "@common/api/api";

import { getToken } from "login/utils/token";

const useSetInterceptors = () => {
  useLayoutEffect(() => {
    api.interceptors.request.use((config) => {
      const accessToken = getToken();
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    });
  });
};
export default useSetInterceptors;
