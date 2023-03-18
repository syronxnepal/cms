import { useMutation } from 'react-query';

import * as authAPI from 'api/auth';
import { ILoginSchema } from 'interface/auth';
import { IError } from 'interface/http';
import { useSnackbar } from 'notistack';

export const useLoginMutation = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    ({ data }: { data: ILoginSchema }) => authAPI.loginUser(data),
    {
      onSuccess: (res) => {
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
