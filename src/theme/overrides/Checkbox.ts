import { CheckboxProps } from '@mui/material';

const Checkbox = () => ({
  MuiCheckbox: {
    defaultProps: {
      color: 'secondary',
    } as CheckboxProps,
    styleOverrides: {
      root: {},
    },
  },
});

export default Checkbox;
