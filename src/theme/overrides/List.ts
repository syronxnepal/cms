import { Theme } from '@mui/material';
import themeVars from 'assets/scss/_theme-vars.module.scss';
import { pxToRem } from 'utils/mui';

const List = (theme: Theme) => ({
  MuiList: {
    styleOverrides: {
      root: {
        // Custom variant 'ellipse-menu-list'. Add this className to <List /> component
        '&.ellipse-menu-list': {
          '& .MuiListItemButton-root': {
            padding: '2px 12px',
          },

          '& .MuiListItemIcon-root': {
            minWidth: '24px',
          },

          '& .MuiTypography-root': {
            fontSize: pxToRem(+themeVars.fontSizeSm),
            marginBottom: 0,
          },
        },
        '&.export-menu-list': {
          margin: 0,
          padding: 6,
          '& .MuiListItem-root': {
            '& .MuiListItemButton-root': {
              display: 'flex',
              alignItems: 'center',
              paddingTop: 4,
              paddingBottom: 4,
              '& .MuiListItemIcon-root': {
                minWidth: '32px',
              },
            },
            '&:hover': {
              '& .MuiTypography-root': {
                color: theme.palette.secondary.main,
              },
            },
          },
        },
      },
    },
  },
});

export default List;
