import React, { useEffect } from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, Divider, List, ListItemButton } from '@mui/material';
import { IMenuData } from 'interface/menu';
import { useAppDispatch, useAppSelector } from 'stores/hooks';
import {
  selectChildMenus,
  selectMenus,
  setChildMenus,
  setMenus,
} from 'stores/menu';

import { menuItems } from './data';
import MenuListItem from './menuList';

const Menu = () => {
  const childMenu = useAppSelector(selectChildMenus);
  const menu = useAppSelector(selectMenus);
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(setChildMenus(null));
  };
  const getMenu = () => {
    if (childMenu?.children) return childMenu?.children;
    if (menu) return menu;
    return [];
  };
  useEffect(() => {
    dispatch(setMenus(menuItems));
  }, [dispatch]);
  useEffect(() => {
    const path = window.location.pathname;
    const split = path.toString().split('/');
    const activeMenu = split[1];
    if (menu && split?.length > 2) {
      const activeParent = menu.find((e) => e.path === `/${activeMenu}`);
      if (!activeParent) return;
      dispatch(
        setChildMenus({
          parentMenu: activeParent as any,
          children: activeParent?.child,
        })
      );
    }
  }, [dispatch, menu]);
  return (
    <List
      aria-labelledby="nested-list-subheader"
      component="nav"
      sx={{ width: '100%', bgcolor: 'background.paper', paddingTop: 0 }}
    >
      {childMenu?.parentMenu ? (
        <>
          <ListItemButton
            onClick={handleBack}
            sx={{ display: 'flex', justifyContent: 'flex-start', p: 1.5 }}
          >
            <KeyboardArrowLeftIcon /> {childMenu?.parentMenu?.label}
          </ListItemButton>
          <Divider />
        </>
      ) : (
        ''
      )}
      {getMenu().map((m: any) => (
        <MenuListItem data={m} key={m.path} sx={m.sx} />
      ))}
    </List>
  );
};

export default Menu;
