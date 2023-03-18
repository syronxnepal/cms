import { AxiosError, AxiosResponse } from 'axios';
import { IComposeError } from 'interface/http';

export const compose = (error: AxiosError): IComposeError => {
  const { request, response, message } = error;
  if (response) {
    const { data, status }: AxiosResponse = response;
    return {
      message: data?.message || message,
      status,
    };
  }
  if (request) {
    return {
      message: 'Request time out',
      status: 503,
    };
  }

  return { message: 'Opps! Something went wrong...' };
};
