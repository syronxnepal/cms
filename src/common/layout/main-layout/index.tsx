import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, CssBaseline, Toolbar } from '@mui/material';

import MainLayoutDrawer from './drawer';
import MainLayoutHeader from './header';

const MainLayout = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <MainLayoutHeader />
    <MainLayoutDrawer />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Outlet />
    </Box>
  </Box>
);

export default MainLayout;
