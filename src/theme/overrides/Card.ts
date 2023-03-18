import { Theme } from '@mui/material';

const Card = (theme: Theme) => ({
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: theme.customShadows.low,

        '&.auth-layout-card': {
          display: 'flex',
        },

        '&.payment-information-card': {
          borderRadius: theme.customBorderRadius.sm,
          boxShadow: theme.customShadows.low,

          '& .card-header': {
            backgroundColor: theme.palette.gray.lighter,
            padding: '6px 20px 6px 10px',
          },

          '& .card-content': {
            padding: '10px 20px',
          },
        },
      },
    },
  },
});

export default Card;
