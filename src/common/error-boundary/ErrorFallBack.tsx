import { Box, Button, Stack, Typography } from '@mui/material';
import { IComposeError } from 'interface/http';

export interface IErrorFallback extends IComposeError {
  resetError(): void;
}

const ErrorFallBack = (props: IErrorFallback) => {
  const { message, status, resetError } = props;
  return (
    <Box
      alignItems="center"
      display="flex"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack>
        <Typography color="GrayText" variant="h6">
          {status && <span>{status} | </span>}
          {message?.toString()}
        </Typography>
        <Button onClick={() => resetError()}>Try again</Button>
      </Stack>
    </Box>
  );
};

export default ErrorFallBack;
