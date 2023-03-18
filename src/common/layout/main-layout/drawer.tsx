import React from 'react';

import { Box, Drawer, Toolbar } from '@mui/material';
import Menu from 'common/menu';
import commonConstants from 'constants/common';

const { DRAWER_WIDTH } = commonConstants;
const MainLayoutDrawer = () => (
  <Drawer
    sx={{
      width: DRAWER_WIDTH.MD,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: DRAWER_WIDTH.MD,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <Menu />
    </Box>
  </Drawer>
);

export default MainLayoutDrawer;
