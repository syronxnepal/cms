import { Theme } from '@mui/material/styles';
import themeVars from 'assets/scss/_theme-vars.module.scss';
import { pxToRem } from 'utils/mui';

const Chip = (theme: Theme) => ({
  MuiChip: {
    styleOverrides: {
      root: {
        '&.custom-chip-label': {
          borderRadius: '0px !important',
        },
        '&.custom-chip-label-outlined': {
          // TODO: Might need to change
          background: '#d8f9ff',
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          borderRadius: '0px !important',
        },
        '&.custom-chip-times': {
          background: theme.palette.gray.lighter,
          borderRadius: '5px',
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,

          '&:hover': {
            background: theme.palette.gray.light,
          },
          svg: {
            width: pxToRem(+themeVars.fontSizeMd),
            height: pxToRem(+themeVars.fontSizeMd),
            color: theme.palette.secondary.light,
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          },
        },
        '&.chip-secondary': {
          background: theme.palette.secondary.main,
          color: theme.palette.primary.lighter,
        },
        '&.chip-primary': {
          background: theme.palette.primary.main,
          color: theme.palette.primary.lighter,
        },
      },
    },
  },
});

export default Chip;
