import { Theme } from '@mui/material/styles';
import themeVars from 'assets/scss/_theme-vars.module.scss';

const AppBar = (theme: Theme) => ({
  MuiAppBar: {
    styleOverrides: {
      root: {
        '&.dashboard-header': {
          boxShadow: theme.customShadows.low,
          backgroundColor: theme.palette.common.white,
          width: `calc(100% - ${themeVars.sidebarWidth})`,
          color: theme.palette.common.black,
        },
      },
    },
  },
});

export default AppBar;
