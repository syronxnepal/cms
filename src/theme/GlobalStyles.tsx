import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import themeVars from 'assets/scss/_theme-vars.module.scss';

const GlobalStyles = () => (
  <GlobalThemeStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        width: '100%',
        height: '100%',
        WebkitOverflowScrolling: 'touch',
      },
      body: {
        width: '100%',
        height: '100%',
        color: themeVars.textDark,
        scrollbarGutter: 'stable both-edges',
      },
      '#root': {
        width: '100%',
        height: '100%',
      },

      // puts the google places autocomplete dropdown results above the bootstrap modal 1050 zindex.
      '.pac-container': {
        zIndex: '1500 !important',
      },
    }}
  />
);

export default GlobalStyles;
