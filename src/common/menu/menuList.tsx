import { useNavigate } from 'react-router-dom';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';
import { IMenuData } from 'interface/menu';
import { useAppDispatch } from 'stores/hooks';
import { changeActiveMenu, setChildMenus } from 'stores/menu';

interface Props {
  sx?: SxProps<Theme>;
  data: IMenuData;
}

const MenuList = ({ data, sx }: Props) => {
  const { path, label, icon, child } = data;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activePath = window.location.pathname;
  const handleClick = () => {
    if (path && child?.length) {
      dispatch(
        setChildMenus({
          parentMenu: data as any,
          children: child,
        })
      );
      return;
    }
    if (path) {
      navigate(path);
      dispatch(changeActiveMenu(data));
    }
  };
  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        ...sx,
        display: 'flex',
        justifyContent: 'space-between',
        ...(activePath === path && {
          background: (t) => t.palette.backgroundGray.light,
        }),
      }}
    >
      <Box>
        {icon && (
          <ListItemIcon>
            <Box component={icon} />
          </ListItemIcon>
        )}
        <ListItemText primary={label} />
      </Box>
      {child?.length ? (
        <Box alignItems="center" display="flex" justifyContent="center">
          <KeyboardArrowRightIcon />
        </Box>
      ) : null}
    </ListItemButton>
  );
};

MenuList.defaultProps = {
  sx: undefined,
};
export default MenuList;
