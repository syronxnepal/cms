export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
export interface IListResponse<T> {
  count: number;
  rows: T[];
}

export interface IErrorResponse {
  response: {
    status: number;
    statusText: string;
    data: {
      message: string;
      statusCode: number;
      name: string;
    };
  };
}

export interface IError {
  message: string;
  statusCode: number;
  name: string;
}

export interface IComposeError {
  message: string;
  status?: number;
}
