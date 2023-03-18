import { Theme } from '@mui/material/styles';
import themeVars from 'assets/scss/_theme-vars.module.scss';

const Dialog = (theme: Theme) => ({
  MuiDialog: {
    styleOverrides: {
      root: {},
      paperWidthMd: {
        maxWidth: themeVars.modalMaxWidthMd,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        '&.MuiDialogTitle-root': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          fontWeight: theme.typography.fontWeightMedium,

          '& .MuiIconButton-root': {
            color: theme.palette.common.white,
          },
        },
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(2),
        maxHeight: '60vh',
        overflowY: 'auto',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.gray.lighter,

        '&.flex-space-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },

        '&.flex-end': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
      },
    },
  },
});

export default Dialog;
