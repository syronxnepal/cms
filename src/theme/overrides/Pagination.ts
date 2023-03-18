import { Theme } from '@mui/material/styles';

const Pagination = (theme: Theme) => ({
  MuiPagination: {
    styleOverrides: {
      root: {
        '& .MuiPaginationItem-root.Mui-selected': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.secondary.main,
          boxShadow: theme.customShadows.low,

          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
    },
  },
});

export default Pagination;
