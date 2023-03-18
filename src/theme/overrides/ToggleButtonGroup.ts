import { Theme } from '@mui/material';

const ToggleButtonGroup = (theme: Theme) => ({
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        gap: '5px',
        '& .MuiButtonBase-root': {
          margin: 2,
          border: 0,
          background: theme.palette.backgroundGray.light,
          minWidth: '48px',
          padding: 0.6,
        },
        '& .Mui-selected': {
          background: `${theme.palette.primary.main} !important`,
          color: `${theme.palette.common.white} !important`,
        },
        '& .MuiToggleButtonGroup-grouped:not(:last-of-type)': {
          borderRadius: '4px',
        },
        '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
          borderRadius: '4px',
        },
      },
    },
  },
});

export default ToggleButtonGroup;
