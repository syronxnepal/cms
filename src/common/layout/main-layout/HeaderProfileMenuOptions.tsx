import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import uiRoutes from 'constants/uiRoutes';

const HeaderProfileMenuOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {
    navigate(uiRoutes.profile);
  };
  const handleSettings = () => {
    navigate(uiRoutes.settings);
  };
  const handleLogout = () => {
    navigate(uiRoutes.login);
  };
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          aria-controls={open ? 'account-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        id="account-menu"
        onClick={handleClose}
        onClose={handleClose}
        open={open}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: 230,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onClick={handleProfile}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderProfileMenuOptions;
