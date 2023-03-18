import themeVars from 'assets/scss/_theme-vars.module.scss';

/**
 * Update the necessary typings for the custom variants if any
 *  * */
declare module '@mui/material/styles' {
  interface TypographyVariants {
    customHeading: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    customHeading?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    customHeading: true;
  }
}
/**
 * -------------------------------------------------------------
 *  * */

/**
 * Convert pixels to rem
 *
 * @param {number} value :: Value in pixels
 * @returns {string} :: respective value in rem
 */
const pxToRem = (value: number) => `${value / 16}rem`;

/**
 * Get media query object for the font sizes
 *
 * @param {number, number, number} obj :: Font sizes for {sm, md, lg}
 * @returns {Object} :: Object containing media queries
 */
const responsiveFontSizes = ({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) => ({
  '@media (min-width:600px)': {
    fontSize: pxToRem(sm),
  },
  '@media (min-width:900px)': {
    fontSize: pxToRem(md),
  },
  '@media (min-width:1200px)': {
    fontSize: pxToRem(lg),
  },
});

const typography = {
  fontFamily: themeVars.fontPrimary,
  fontWeightRegular: themeVars.fontWeightRegular,
  fontWeightMedium: themeVars.fontWeightMedium,
  fontWeightBold: themeVars.fontWeightBold,
  h1: {
    fontWeight: themeVars.fontWeightMedium,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 48 }), // NOTE: only lg fontSize are determined for typography
  },
  h2: {
    fontWeight: themeVars.fontWeightMedium,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 42 }),
  },
  h3: {
    fontWeight: themeVars.fontWeightMedium,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 36 }),
  },
  h4: {
    fontWeight: themeVars.fontWeightMedium,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 30 }),
  },
  h5: {
    fontWeight: themeVars.fontWeightMedium,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 24 }),
  },
  h6: {
    fontWeight: themeVars.fontWeightMedium,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: themeVars.fontWeightMedium,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: themeVars.fontWeightMedium,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    color: themeVars.textLight,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    color: themeVars.textLight,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase' as const,
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize' as const,
  },
  // Custom variants
  // You can add custom variants as well.
  // Note: customHeading is just for demo purpose
  customHeading: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    textDecoration: 'underline',
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
};

export default typography;
