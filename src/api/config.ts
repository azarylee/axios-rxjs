import { AxiosRequestConfig } from "axios";

const mockUrl = process.env.REACT_APP_MOCK_HOST;
const realUrl = process.env.REACT_APP_HOST;

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: realUrl,
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
};

export const axiosMockRequestConfiguration: AxiosRequestConfig = {
  baseURL: mockUrl,
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
};
