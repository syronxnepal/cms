import { Theme } from '@mui/material/styles';
import { pxToRem } from 'utils/mui';

const IconButton = (theme: Theme) => ({
  MuiIconButton: {
    styleOverrides: {
      root: {
        // this is styles for the new variant 'filled-secondary'
        // use className="filled-secondary" in Icon Button for using this variant
        '&.filled-secondary': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.secondary.main,
          boxShadow: theme.customShadows.low,
          '&:hover': {
            boxShadow: theme.customShadows.high,
          },
        },
        '&.badge-button': {
          backgroundColor: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.common.white,
          borderRadius: '20px',
          padding: '3px 6px',
          fontSize: pxToRem(10),
        },
        '&.search-bar': {
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 2,
          padding: '14px',
          svg: {
            color: theme.palette.common.white,
          },
        },
      },
    },
  },
});

export default IconButton;
