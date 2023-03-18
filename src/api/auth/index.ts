import apiRoutes from 'constants/apiRoutes';
import { ILogin, ILoginSchema } from 'interface/auth';
import { IResponse } from 'interface/http';
import { baseRequest } from 'utils/axios';

const { auth } = apiRoutes;

export const loginUser = async (
  data: ILoginSchema
): Promise<IResponse<ILogin>> => {
  const { response, error } = await baseRequest({
    method: 'POST',
    url: auth.login,
    data,
  });

  if (error) {
    throw new Error(error.message);
  }

  return response?.data;
};
