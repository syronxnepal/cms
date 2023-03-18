import { Box, CircularProgress } from '@mui/material';

interface IProps {
  containerHeight?: string;
  size?: string;
}

const LoadingIndicator = ({ containerHeight, size }: IProps) => (
  <Box
    sx={{
      width: '100%',
      height: containerHeight,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress size={size} />
  </Box>
);

LoadingIndicator.defaultProps = {
  containerHeight: '20rem',
  size: '2rem',
};

export default LoadingIndicator;
