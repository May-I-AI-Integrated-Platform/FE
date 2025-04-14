import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {return response;},
  async (error) => {
    const { config, response: {status}} = error;

    if (status === 419) {
      const originRequest = config;

      if (!originRequest._retry) {
        originRequest._retry = true;

        return axiosInstance(originRequest);
      }
    }
  }
)