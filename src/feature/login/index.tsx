import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginForm } from 'interface/auth';
import { LoginSchema } from 'schema/auth';
import { useLoginMutation } from 'services/auth';

import LoginForm from './form';

const defaultValues = {
  username: '',
  password: '',
  keepLoggedIn: false,
};
const Login = () => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const methods = useForm<ILoginForm>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const loginMutation = useLoginMutation();

  const onSubmit = (data: ILoginForm) => {
    console.log('data', data);
    loginMutation.mutate(
      { data },
      {
        onSuccess: (response) => {
          console.log('response', response);
          // if (response?.data?.token) {
          //   setAuthState({
          //     token: response.data.token,
          //     permissions: response.data.permissions,
          //     dispatch,
          //   });
          //   navigate(!returnUrl ? uiRoutes.index : returnUrl);
          //   return;
          // }
          // dispatch(setCredentials(data));
          // navigate(
          //   `modal?type=${ModalKey.TWO_FACTOR_AUTHENTICATION}&userId=${
          //     response?.data?.data
          //   }&userEmail=${response?.data?.email}${search?.replace('?', '&')}&returnUrl=${returnUrl}`
          // );
        },
      }
    );
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <LoginForm
          setTogglePassword={setTogglePassword}
          togglePassword={togglePassword}
        />
      </form>
      <Outlet />
    </FormProvider>
  );
};

export default Login;
