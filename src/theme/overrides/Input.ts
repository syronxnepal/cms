import { Theme } from '@mui/material/styles';
import themeVars from 'assets/scss/_theme-vars.module.scss';
import { pxToRem } from 'utils/mui';

const Input = (theme: Theme) => ({
  MuiFormControl: {
    styleOverrides: {
      root: {
        // Custom Variant 'select-filled-variant' for Select
        '&.select-filled-variant': {
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.gray.lighter,
            borderRadius: themeVars.roundedXs,
          },

          '&--hide-label-on-focus': {
            '& .MuiInputLabel-root.MuiInputLabel-shrink': {
              display: 'none',
            },
          },

          '&--fixed-label': {
            '& .MuiInputLabel-root': {
              position: 'relative !important',
              transform: 'none !important',
              fontSize: `${pxToRem(+themeVars.fontSizeXs)} !important`,
            },

            '& .MuiInputBase-root': {
              marginTop: pxToRem(7),
            },
          },
        },

        // Custom Variant 'select-text-variant' for Select
        '&.select-text-variant': {
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.common.white,
            borderRadius: themeVars.roundedXs,
            width: '80px',

            '&:hover': {
              backgroundColor: theme.palette.gray.lighter,
            },

            '& fieldset': {
              border: 'none',
            },
          },

          '&--gray-bg': {
            '& .MuiInputBase-root': {
              backgroundColor: theme.palette.gray.light,
            },
          },

          '&--limit-changer': {
            '& .MuiInputBase-root': {
              minWidth: 0,
            },
          },
        },

        // Custom Variant 'custom-multiType-tags' for Select
        '&.custom-multiType-tags': {
          '& .MuiFilledInput-root': {
            backgroundColor: themeVars.white,
            paddingBottom: '20px',
            '& .MuiFilledInput-input': {
              padding: 0,
              '&::-webkit-input-placeholder': {
                color: theme.palette.gray.main,
                fontSize: pxToRem(+themeVars.fontSizeXs),
                fontWeight: theme.typography.fontWeightBold,
              },
            },
          },
        },
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      sizeSmall: {
        fontSize: pxToRem(+themeVars.fontSizeSm),
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        // minWidth: 150,
      },
      inputSizeSmall: {
        fontSize: pxToRem(+themeVars.fontSizeSm),
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        // this is styles for the new variant 'filled-variant'
        // use className="filled-variant" in textfield for using this variant
        '&.filled-variant': {
          'label + &': {
            marginTop: theme.spacing(3),
          },

          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.gray.lighter,
          },

          '& .MuiInputBase-input': {
            position: 'relative',
            fontSize: pxToRem(+themeVars.fontSizeMd),
            width: '100% !important',
          },

          '& fieldset': {
            border: `1px solid ${theme.palette.gray.lighter}`,
            borderRadius: themeVars.roundedXs,
          },
          '& .MuiInputBase-root:hover + fieldset': {
            border: `1px solid ${theme.palette.primary.main}`,
          },
          '& .MuiInputBase-root:focus + fieldset': {
            border: `1px solid ${theme.palette.primary.main}`,
          },

          '& .MuiInputAdornment-root': {
            svg: {
              color: theme.palette.gray.main,
            },
          },

          '&--white': {
            '& .MuiInputBase-root': {
              backgroundColor: theme.palette.common.white,
            },

            '& .MuiInputAdornment-root': {
              svg: {
                color: theme.palette.gray.main,
              },
            },

            '& fieldset': {
              borderRadius: themeVars.roundedXs,
            },
          },

          '&--white-primary-icon': {
            '& .MuiInputAdornment-root': {
              svg: {
                color: theme.palette.primary.main,
              },
            },

            '& fieldset': {
              borderRadius: themeVars.roundedXs,
            },
          },

          '&--referral-search-field': {
            minWidth: '100%',
            '& .MuiOutlinedInput-input': {
              width: '100%',
              backgroundColor: theme.palette.backgroundGray.light,
            },
          },
          '&--search-field': {
            minWidth: '400px',
            '& .MuiOutlinedInput-input': {
              width: '100%',
            },
          },
          '&--search-field-filter': {
            minWidth: '400px',
            '& .MuiOutlinedInput-input': {
              width: 'calc(100% - 68px)',
            },
          },
        },

        // Use className = 'auto-min-width' in <TextField /> if you need to set min-width to 'auto'.
        '&.auto-min-width': {
          '& .MuiInputBase-root': {
            minWidth: 'auto',
          },
        },
      },
    },
  },
});

export default Input;
