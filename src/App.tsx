import { Ref, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import AxiosInterceptor from 'common/axios-interceptor';
import DetectOnlineOffline from 'common/DetectOnlineOffline';
import { SnackbarKey, SnackbarProvider } from 'notistack';
import Router from 'routes';
import { store } from 'stores';
import ThemeConfig from 'theme';
import GlobalStyles from 'theme/GlobalStyles';

const isProduction = process.env.NODE_ENV === 'production';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 0,
      // staleTime: 60 * 1000, // 60 secs
      useErrorBoundary: (error: any) => error?.status <= 500,
      retry: false,
    },
  },
});
const App = () => {
  const ref: Ref<SnackbarProvider> = useRef(null);
  const snackButton = (snackbarId: SnackbarKey) => (
    <IconButton onClick={() => ref?.current?.closeSnackbar(snackbarId)}>
      <ClearIcon sx={{ color: (t) => t.palette.common.white }} />
    </IconButton>
  );
  return (
    <ThemeConfig>
      <GlobalStyles />
      <SnackbarProvider
        action={(snackbarId) => snackButton(snackbarId)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        maxSnack={3}
        ref={ref}
      >
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <DetectOnlineOffline />
              <AxiosInterceptor>
                <Router />
                {isProduction ? null : (
                  <ReactQueryDevtools initialIsOpen={false} />
                )}
              </AxiosInterceptor>
            </BrowserRouter>
          </QueryClientProvider>
        </Provider>
      </SnackbarProvider>
    </ThemeConfig>
  );
};

export default App;
