import { Theme } from '@mui/material/styles';

const Paper = (theme: Theme) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        '& .membership-card': {
          background: theme.palette.backgroundGray.light,
          textAlign: 'center',
          opacity: 0.9,
          borderRadius: '10px',
        },
        '& .active-membership-card': {
          textAlign: 'center',
          border: `2px solid ${theme.palette.primary.light}`,
          background: theme.palette.backgroundGray.lighter,
          position: 'relative',
          svg: {
            display: 'block !important',
            color: theme.palette.primary.light,
            position: 'absolute',
            top: '10px',
            left: '10px',
          },
        },
        '&.communication-card': {
          display: 'flex !important',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: theme.palette.gray.lighter,
          boxShadow: 'none',
          borderRadius: '10px !important',
          '&:hover': {
            boxShadow: `0px 0px 10px ${theme.palette.primary.main}`,
            '& .communication-card-trash': {
              display: 'block',
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: '1',
            },
          },
          position: 'relative',
          '& .communication-card-trash': {
            display: 'none',
          },
        },
      },
    },
  },
});

export default Paper;
