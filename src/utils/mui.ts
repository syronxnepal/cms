/**
 * Convert pixels to rem
 *
 * @param {number} value :: Value in pixels
 * @returns {string} :: respective value in rem
 */
export const pxToRem = (value: number) => `${value / 16}rem`;

/**
 * Get media query object for the font sizes
 *
 * @param {number, number, number} obj :: Font sizes for {sm, md, lg}
 * @returns {Object} :: Object containing media queries
 */
export const responsiveFontSizes = ({
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

export const getAllyPropsForTabs = (index: number) => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
});
