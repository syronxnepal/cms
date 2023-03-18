import { RadioProps } from '@mui/material';

const Radio = () => ({
  MuiRadio: {
    defaultProps: {
      color: 'primary',
    } as RadioProps,
    styleOverrides: {
      root: {},
    },
  },
});

export default Radio;
