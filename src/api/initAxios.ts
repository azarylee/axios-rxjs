import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from "axios";

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  console.log("config: ", config);
  const service = axios.create(config);

  // request interceptor
  service.interceptors.request.use(
    (config) => config,
    (error): AxiosPromise => {
      return Promise.reject(error);
    }
  );

  // response interceptor
  service.interceptors.response.use(
    (response): AxiosPromise => {
      if (response.status === 200) {
        return Promise.resolve(response);
      }
      return Promise.reject(response);
    },
    (error): AxiosPromise => {
      if (error.response && error.response.status) {
        switch (error.response.status) {
          case 401:
            window.location.href = "/";
            // message.error(error.response);
            break;
          default:
            // message.error(error.response);
            break;
        }
        return Promise.reject(error.response);
      }
      return Promise.reject("something went wrong!");
    }
  );

  return service;
};

export default initialization;
