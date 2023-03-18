import { Theme } from '@mui/material';

const Link = (theme: Theme) => ({
  MuiLink: {
    styleOverrides: {
      root: {
        color: `${theme.palette.secondary.main} !important`,
        textDecoration: 'none',
        '&:hover': {
          color: theme.palette.secondary.dark,
          textDecoration: 'underline',
        },
      },
    },
  },
});

export default Link;
