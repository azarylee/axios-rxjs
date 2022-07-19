import AxiosMockAdapter from "axios-mock-adapter";
import initialization from "./initAxios";
import {
  axiosRequestConfiguration,
  axiosMockRequestConfiguration
} from "./config";

// create an axios instance
const isAxiosMock = Boolean(process.env.REACT_APP_PUBLIC_IS_AXIOS_MOCK);
let service = initialization(axiosRequestConfiguration);
if (isAxiosMock) {
  service = initialization(axiosMockRequestConfiguration);
}

export const mockInstance = new AxiosMockAdapter(service, {
  delayResponse: 0
});

export default service;
