import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import ModalKey from 'enums/ModalKey';

const Settings = () => {
  const navigate = useNavigate();
  const handlePermission = () => {
    navigate(`modal?type=${ModalKey.PERMISSIONS}`);
  };
  return (
    <Box>
      <Button onClick={handlePermission}>Permission Modal</Button>
      <Outlet />
    </Box>
  );
};

export default Settings;
