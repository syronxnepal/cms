import { ButtonProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import themeVars from 'assets/scss/_theme-vars.module.scss';
import { pxToRem } from 'utils/mui';

declare module '@mui/material/Button' {
  // interface ButtonPropsSizeOverrides {
  //   extraSmall: true;
  // }

  interface ButtonPropsColorOverrides {
    // Disable colors that are not in use
    primary: true;
    info: false;
    success: false;
    warning: false;
  }

  interface ButtonPropsVariantOverrides {
    // Disable variants that are not in use
    outlined: true;
    // Custom variants
    neutral: true;
    container: true;
  }
}

const Button = (theme: Theme) => ({
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true, // No more ripple on buttons for the whole application
    },
  },
  MuiButton: {
    defaultProps: {
      size: 'medium',
      color: 'secondary',
    } as ButtonProps,
    variants: [
      {
        // custom variant 'neutral'
        props: { variant: 'neutral' } as ButtonProps,
        style: {
          backgroundColor: theme.palette.gray.light,
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: theme.palette.gray.lighter,
          },
        },
      },

      {
        // custom variant 'neutral'
        props: { variant: 'container' } as ButtonProps,
        style: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.gray.lighter,
          position: 'relative',
          span: {
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translate(0, -50%)',
          },
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        borderRadius: theme.customBorderRadius.xs,
        fontWeight: theme.typography.fontWeightRegular,
        boxShadow: 'none',
        '&:hover, &:focus': {
          boxShadow: theme.customShadows.low,
        },
        '&.custom-radio-button': {
          height: '30px',
        },
        '&.radio-button--lg': {
          width: '100%',
          padding: 5,
        },
        '&.gender-radio-button': {
          height: 25,
          padding: '0px !important',
          width: '100%',

          '& .MuiTypography-root': {
            fontSize: `${pxToRem(+themeVars.fontSizeSm)} !important`,
          },
        },
        '&.physician-radio-button': {
          position: 'relative',
          '& .MuiButton-startIcon': {
            position: 'absolute',
            top: '20px',
            left: '16px',
          },
        },
        '&.block-radio-button': {
          '& .MuiTypography-root': {
            fontSize: `${pxToRem(+themeVars.fontSizeSm)} !important`,
          },

          '&--small': {
            paddingTop: '4px !important',
            paddingBottom: '4px !important',
          },
        },
      },
      containedSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
      text: {
        '&:hover': {
          boxShadow: 'none',
        },
        '&.disable-padding': {
          padding: 0,
          minWidth: 0,
        },
      },
      sizeSmall: {
        fontSize: pxToRem(12),
        padding: `${pxToRem(6)} ${pxToRem(20)}`,
      },
      sizeMedium: {
        fontSize: pxToRem(14),
        padding: `${pxToRem(8)} ${pxToRem(30)}`,
      },
      sizeLarge: {
        fontSize: pxToRem(18),
        padding: `${pxToRem(10)} ${pxToRem(50)}`,
      },
      iconSizeSmall: {
        svg: {
          fontSize: `${pxToRem(+themeVars.fontSizeXs)} !important`, // should be a better method to customize size of icon in button
        },
      },
      iconSizeMedium: {
        svg: {
          paddingBottom: '2px',
          fontSize: `${pxToRem(+themeVars.fontSizeMd)} !important`, // should be a better method to customize size of icon in button
        },
      },
      iconSizeLarge: {
        svg: {
          paddingBottom: '4px',
          fontSize: `${pxToRem(+themeVars.fontSizeLg)} !important`, // should be a better method to customize size of icon in button
        },
      },
    },
  },
});

export default Button;
