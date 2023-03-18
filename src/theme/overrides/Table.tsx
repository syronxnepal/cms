import { Theme } from '@mui/material/styles';
import themeVars from 'assets/scss/_theme-vars.module.scss';

const BORDER = `1px solid ${themeVars.grayLight}`;

const Table = (theme: Theme) => ({
  MuiTableContainer: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        cursor: 'pointer',
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& .MuiTableRow-head': {
          borderTop: BORDER,
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        '& .MuiTableRow-root': {
          transition: 'all 0.375s ease-out',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.075)',
          },
        },
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&.row': {
          '&--with-collapsible-row': {
            '& .MuiTableCell-root': {
              borderBottom: 'none',
            },
          },

          '&--collabsible': {
            backgroundColor: theme.palette.gray.lighter,
            '& .MuiTableCell-root': {
              borderBottom: BORDER,
            },
          },

          '&--collabsible-without-bottom-border': {
            backgroundColor: theme.palette.gray.lighter,
            '& .MuiTableCell-root': {
              borderBottom: 'none',
            },
          },
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        paddingTop: '10px',
        paddingBottom: '10px',

        '&.expand-collapse-column': {
          width: theme.spacing(6),
          verticalAlign: 'top',
          paddingTop: '14px',

          '& .MuiIconButton-root': {
            color: theme.palette.secondary.main,
          },
        },
      },
    },
  },
});

export default Table;
