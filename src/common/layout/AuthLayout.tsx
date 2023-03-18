import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const AuthLayout = () => (
  <Box>
    Auth Layout
    <Outlet />
  </Box>
);

export default AuthLayout;
