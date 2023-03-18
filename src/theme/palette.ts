import themeVars from 'assets/scss/_theme-vars.module.scss';

declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['primary'];
    backgroundGray: Palette['primary'];
  }

  // Enable typings for 'lighter' and 'darker' shades
  // If you need to add a custom shade (say 'faint') for either of
  // Primary, Secondary, Info, Success, Warning and Error, you need to add typings as well
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
    backgroundGray?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
  }
}

const COMMON = {
  black: themeVars.black,
  white: themeVars.white,
};

const PRIMARY = {
  lighter: themeVars.primaryLighter,
  light: themeVars.primaryLight,
  main: themeVars.primaryMain,
  dark: themeVars.primaryDark,
  darker: themeVars.primaryDarker,
  // contrastText: will be calculated to contrast with palette.primary.main if not specified
};

const SECONDARY = {
  lighter: themeVars.secondaryLighter,
  light: themeVars.secondaryLight,
  main: themeVars.secondaryMain,
  dark: themeVars.secondaryDark,
  darker: themeVars.secondaryDarker,
  // contrastText: will be calculated to contrast with palette.secondary.main if not specified
};

const INFO = {
  lighter: themeVars.infoLighter,
  light: themeVars.infoLight,
  main: themeVars.infoMain,
  dark: themeVars.infoDark,
  darker: themeVars.infoDarker,
  // contrastText: will be calculated to contrast with palette.info.main if not specified
};

const SUCCESS = {
  lighter: themeVars.successLighter,
  light: themeVars.successLight,
  main: themeVars.successMain,
  dark: themeVars.successDark,
  darker: themeVars.successDarker,
  // contrastText: will be calculated to contrast with palette.success.main if not specified
};

const WARNING = {
  lighter: themeVars.warningLighter,
  light: themeVars.warningLight,
  main: themeVars.warningMain,
  dark: themeVars.warningDark,
  darker: themeVars.warningDarker,
  // contrastText: will be calculated to contrast with palette.warning.main if not specified
};

const ERROR = {
  lighter: themeVars.errorLighter,
  light: themeVars.errorLight,
  main: themeVars.errorMain,
  dark: themeVars.errorDark,
  darker: themeVars.errorDarker,
  // contrastText: will be calculated to contrast with palette.error.main if not specified
};

const TEXT = {
  primary: themeVars.textDark,
  secondary: themeVars.textLight,
};

// Custom palettes
const GRAY = {
  lighter: themeVars.grayLighter,
  light: themeVars.grayLight,
  main: themeVars.grayMain,
  dark: themeVars.grayDark,
  darker: themeVars.grayDarker,
};

const BACKGROUND_GRAY = {
  lighter: themeVars.backgroundGrayLighter,
  light: themeVars.backgroundGrayLight,
  main: themeVars.backgroundGrayMain,
  dark: themeVars.backgroundGrayDark,
  darker: themeVars.backgroundGrayDarker,
};

const palette = {
  common: { ...COMMON },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  text: { ...TEXT },

  // custom palettes
  // We can add custom ones if the MUI doesn't have the one we need.

  // adding a custom palette for 'gray'.
  // Don't get confused with 'grey'.
  // 'grey' is a built-in shade like others (red, blue, etc.) and has shades from grey-100 to grey-900
  // 'gray' is a custom palette we added.
  gray: { ...GRAY },
  backgroundGray: { ...BACKGROUND_GRAY },
};

export default palette;
