import React from 'react';

import { Box } from '@mui/material';

const LoadingDots = () => (
  <Box display="flex" justifyContent="center" padding={2}>
    <Box className="dot-flashing" />
  </Box>
);

export default LoadingDots;
