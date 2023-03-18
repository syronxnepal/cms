import { useMutation, useQuery, useQueryClient } from 'react-query';

import * as bookAPI from 'api/book';
import { IBookForm } from 'interface/book';
import { IFilter } from 'interface/common';
import { IError } from 'interface/http';
import { useSnackbar } from 'notistack';
import { RootState, store } from 'stores';

import { bookData } from './data';

export const bookKeys = {
  all: ['books'] as const,
  lists: () => [...bookKeys.all, 'list'] as const,
  list: (filters: IFilter) => [...bookKeys.lists(), { filters }] as const,
  details: () => [...bookKeys.all, 'detail'] as const,
  detail: (id: number | string) => [...bookKeys.details(), id, 'book'] as const,
};

// eslint-disable-next-line arrow-body-style
export const useBookQuery = (filters: IFilter) => {
  const queryInfo = useQuery(bookKeys.list(filters), () =>
    bookAPI.getAllBooks(filters)
  );
  return {
    ...queryInfo,
    // data: queryInfo?.data?.data,
    data: { count: bookData.length, rows: bookData },
  };
};

export const useBookDetailQuery = (
  id: string,
  { enabled }: { enabled: boolean }
) => {
  const queryInfo = useQuery(
    bookKeys.detail(id),
    () => bookAPI.getBookDetail(id),
    {
      enabled,
      // select: adaptLabServiceDetail,
    }
  );
  const res = bookData.find((e: any) => Number(e.id) === Number(id));

  return {
    ...queryInfo,
    // data: queryInfo.data?.data,
    data: res,
  };
};

export const useAddBookMutation = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const rootState: RootState = store.getState();
  const bookStore = rootState.book;

  return useMutation(({ data }: { data: IBookForm }) => bookAPI.addBook(data), {
    onSuccess: (res) => {
      queryClient.setQueryData(
        bookKeys.list(bookStore.filters),
        (oldData: any) => ({
          ...oldData,
          data: {
            ...oldData.data,
            rows: [res.data, ...oldData.data.rows],
          },
        })
      );

      enqueueSnackbar(res.message, {
        variant: 'success',
      });
    },

    onError: (err: IError) => {
      enqueueSnackbar(err.message, {
        variant: 'error',
      });
    },
  });
};

export const useUpdateBookMutation = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const rootState: RootState = store.getState();
  const bookStore = rootState.book;

  return useMutation(
    ({ data, bookId }: { data: IBookForm; bookId: string }) =>
      bookAPI.updateBook(bookId, data),
    {
      onSuccess: (res) => {
        queryClient.setQueryData(
          bookKeys.list(bookStore.filters),
          (oldData: any) => ({
            ...oldData,
            data: {
              ...oldData.data,
              rows: oldData.data.rows.map((item: any) => {
                if (item.bookId === res.data.bookId) {
                  return res.data;
                }
                return item;
              }),
            },
          })
        );

        enqueueSnackbar(res.message, {
          variant: 'success',
        });
      },

      onError: (err: IError) => {
        enqueueSnackbar(err.message, {
          variant: 'error',
        });
      },
    }
  );
};

// export const useDeleteLabServiceMutation = () => {
//   const { enqueueSnackbar } = useSnackbar();
//   const queryClient = useQueryClient();

//   const rootState: RootState = store.getState();
//   const bookStore = rootState.labService;

//   return useMutation(
//     ({ labServiceId }: { labServiceId: string }) =>
//       labServiceAPI.deleteLabService(labServiceId),
//     {
//       onSuccess: (res) => {
//         queryClient.setQueryData(
//           bookKeys.list(bookStore.filters),
//           (oldData: any) => ({
//             ...oldData,
//             data: {
//               ...oldData.data,
//               rows: oldData.data.rows.filter(
//                 (item: any) => item.labServiceId !== res.data.labServiceId
//               ),
//             },
//           })
//         );
//         enqueueSnackbar(res.message, {
//           variant: 'success',
//         });
//       },
//       onError: (err: IError) => {
//         enqueueSnackbar(err.message, {
//           variant: 'error',
//         });
//       },
//     }
//   );
// };
