import React, { useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import customBorderRadius from './borderRadius';
import breakpoints from './breakpoints';
import componentsOverrides from './overrides';
import palette from './palette';
import customShadows from './shadows';
import typography from './typography';

interface Props {
  children: React.ReactNode;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      low: string;
      medium: string;
      high: string;
      border: string;
    };

    customBorderRadius: {
      xs: string;
      sm: string;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    customShadows?: {
      low?: string;
      medium?: string;
      high?: string;
      border?: string;
    };

    customBorderRadius?: {
      xs?: string;
      sm?: string;
    };
  }
}

const ThemeConfig = ({ children }: Props): JSX.Element => {
  const themeOptions = useMemo(
    () => ({
      breakpoints,
      customBorderRadius,
      customShadows,
      palette,
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverrides(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
