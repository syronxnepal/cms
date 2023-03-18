import { ReactElement, ReactNode, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// import { useAuth } from 'stores/Auth';
import { removeInterceptors, setupInterceptors } from 'utils/axios';
import { requestLog } from 'utils/logger';

const AxiosInterceptor = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const navigate = useNavigate();
  // const auth = useAuth();

  useLayoutEffect(() => {
    const onRequest = (
      config: InternalAxiosRequestConfig
    ): InternalAxiosRequestConfig => {
      requestLog(config);
      return config;
    };
    const onRequestError = (error: AxiosError): Promise<AxiosError> =>
      Promise.reject(error);

    const onResponse = (response: AxiosResponse): AxiosResponse => response;

    const onResponseError = (error: AxiosError): Promise<AxiosError> => {
      const { response } = error;
      if (response?.status === 401) {
        // Use to logout on status 401
        // auth?.logout(() => navigate('/'));
      }
      return Promise.reject(error);
    };
    setupInterceptors({
      onRequest,
      onRequestError,
      onResponse,
      onResponseError,
    });
    return () => removeInterceptors();
  }, [navigate]);

  return children as ReactElement<any>;
};

export default AxiosInterceptor;
