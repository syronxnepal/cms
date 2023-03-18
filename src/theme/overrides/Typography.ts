import { Theme } from '@mui/material/styles';

const Typography = (theme: Theme) => ({
  MuiTypography: {
    defaultProps: {
      gutterBottom: true,
    },
    styleOverrides: {
      gutterBottom: {
        marginBottom: theme.spacing(1),
      },
    },
  },
});

export default Typography;
