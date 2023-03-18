import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const MainLayout = () => (
  <Box>
    Main Layout
    <Outlet />
  </Box>
);

export default MainLayout;
