import apiRoutes from 'constants/apiRoutes';
import { IBook, IBookForm } from 'interface/book';
import { IFilter } from 'interface/common';
import { IListResponse, IResponse } from 'interface/http';
import { baseRequest } from 'utils/axios';

const { book } = apiRoutes;

export const getAllBooks = async (
  params: IFilter
): Promise<IResponse<IListResponse<IBook>>> => {
  const { response, error } = await baseRequest({
    method: 'GET',
    params,
    url: book.getAll,
  });

  // if (error) {
  //   throw new Error(error.message);
  // }
  return response?.data;
};

export const addBook = async (data: IBookForm): Promise<IResponse<IBook>> => {
  const { response, error } = await baseRequest({
    method: 'POST',
    url: book.add,
    data,
  });

  if (error) {
    throw new Error(error.message);
  }

  return response?.data;
};

export const updateBook = async (
  bookId: string,
  data: IBookForm
): Promise<IResponse<IBook>> => {
  const { response, error } = await baseRequest({
    method: 'PUT',
    url: book.edit.replace(':id', bookId),
    data,
  });

  if (error) {
    throw new Error(error.message);
  }

  return response?.data;
};

export const getBookDetail = async (
  bookId: string
): Promise<IResponse<IBook>> => {
  const { response, error } = await baseRequest({
    method: 'GET',
    url: book.getOne.replace(':id', bookId),
  });

  // if (error) {
  //   throw new Error(error.message);
  // }

  return response?.data;
};

// export const deleteLabService = async (
//   labServiceId: string
// ): Promise<IResponse<ILabService>> => {
//   const { response, error } = await baseRequest({
//     method: 'DELETE',
//     url: labService.remove.replace(':id', labServiceId),
//   });

//   if (error) {
//     throw new Error(error.message);
//   }

//   return response?.data;
// };
