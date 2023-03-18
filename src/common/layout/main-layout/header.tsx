import React from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

import HeaderProfileMenuOptions from './HeaderProfileMenuOptions';
import LogoSection from './LogoSection';

const MainLayoutHeader = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <LogoSection />
      <Box>
        <HeaderProfileMenuOptions />
      </Box>
    </Toolbar>
  </AppBar>
);

export default MainLayoutHeader;
