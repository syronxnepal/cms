import { Theme } from '@mui/material/styles';
import themeVars from 'assets/scss/_theme-vars.module.scss';

const Tab = (theme: Theme) => ({
  MuiTabs: {
    styleOverrides: {
      root: {
        // Custom variant 'modal-tab'. Add this className to <Tab /> component
        '&.modal-tab': {
          backgroundColor: theme.palette.primary.main,
          minHeight: 0,

          '& .MuiTabs-flexContainer': {
            padding: `0 ${theme.spacing(1.5)}`,
          },

          '& .MuiTab-root': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.light,
            opacity: 0.75,
            fontWeight: theme.typography.fontWeightRegular,
            display: 'inline',
            minHeight: 0,
            padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
            margin: `0 ${theme.spacing(0.5)}`,

            '& svg': {
              marginBottom: 0,
              marginRight: theme.spacing(1),
            },
          },

          '& .MuiTab-root.Mui-selected': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary,
            opacity: 1,

            '& svg': {
              color: theme.palette.primary.main,
            },
          },

          '& .MuiTabs-indicator': {
            display: 'none',
          },
        },

        // Custom variant 'table-row-tab'. Add this className to <Tab /> component
        '&.table-row-tab': {
          borderBottom: `1px solid ${theme.palette.gray.light}`,
          marginBottom: theme.spacing(2),

          '& .MuiTab-root': {
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightMedium,
          },

          '& .MuiTab-root.Mui-selected': {
            color: theme.palette.text.primary,
          },

          '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.secondary.main,
          },
        },

        // Custom variant 'table-row-tab'. Add this className to <Tab /> component
        '&.primary-bg-tab': {
          '& .MuiTab-root': {
            color: theme.palette.common.white,
            fontSize: `${themeVars.fontSizeMd}px`,
            fontWeight: theme.typography.fontWeightRegular,
          },

          '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.secondary.main,
            height: '3px',
          },
        },
      },
    },
  },
});

export default Tab;
