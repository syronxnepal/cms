import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  Method,
} from 'axios';

import config from '../config';
import { compose } from './errorHandler';

const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    requestapp: 'vitafyhealth',
  },
  baseURL: config.baseURL,
  //  timeout: 600000,
};

interface InterceptorHandler {
  onRequest: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  onRequestError: (error: AxiosError) => Promise<AxiosError>;
  onResponse: (respose: AxiosResponse) => AxiosResponse;
  onResponseError: (error: AxiosError) => Promise<AxiosError>;
}

interface IBaseRequest {
  method: Method;
  url: string;
  data?: any;
  params?: any;
  callback?(): void;
}

export class CustomAxios {
  requestInterceptor: any;

  responseInterceptor: any;

  controller: AbortController | null;

  axiosInstance: AxiosInstance;

  constructor(defaultconfig: AxiosRequestConfig) {
    this.controller = new AbortController();
    this.axiosInstance = axios.create(defaultconfig);
  }

  setupInterceptors = ({
    onRequest,
    onRequestError,
    onResponse,
    onResponseError,
  }: InterceptorHandler) => {
    this.requestInterceptor = this.axiosInstance.interceptors.request.use(
      onRequest,
      onRequestError
    );
    this.responseInterceptor = this.axiosInstance.interceptors.response.use(
      onResponse,
      onResponseError
    );
  };

  removeInterceptors = () => {
    this.axiosInstance.interceptors.request.eject(this.requestInterceptor);
    this.axiosInstance.interceptors.response.eject(this.responseInterceptor);
  };

  cancelRequest = () => {
    this.controller?.abort();
    this.controller = new AbortController();
  };

  setAuthToken = (token: string) => {
    this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  baseRequest = async ({
    method,
    url,
    data,
    params,
    callback,
  }: IBaseRequest) => {
    const requestConfig = {
      method,
      url,
      data,
      params,
      signal: this.controller?.signal,
    };
    try {
      const response = await this.axiosInstance(requestConfig);
      return { response };
    } catch (error: any) {
      return { error: compose(error) };
    } finally {
      callback?.();
    }
  };
}

export const {
  axiosInstance: customAxios,
  setupInterceptors,
  removeInterceptors,
  cancelRequest,
  setAuthToken,
  baseRequest,
} = new CustomAxios(defaultConfig);

export default customAxios;
