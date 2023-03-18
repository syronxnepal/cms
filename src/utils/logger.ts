/* eslint-disable no-console */
import { AxiosRequestConfig } from 'axios';

export const requestLog = (request: AxiosRequestConfig) => {
  console.log({ request });
};

// export const responseLog = (res: AxiosResponse) => {

// }
