import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const PublicLayout = () => (
  <Box>
    Public Layout
    <Outlet />
  </Box>
);

export default PublicLayout;
