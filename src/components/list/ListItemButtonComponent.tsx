import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';
import { IMenuData } from 'interface/menu';

interface Props {
  sx?: SxProps<Theme>;
  data: IMenuData;
  onClick?: VoidFunction;
}

const ListItemButtonComponent = ({ data, sx, onClick }: Props) => {
  const { label, icon } = data;
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <ListItemButton onClick={handleClick} sx={sx}>
      {icon && (
        <ListItemIcon>
          <Box component={icon} />
        </ListItemIcon>
      )}
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

ListItemButtonComponent.defaultProps = {
  sx: undefined,
  onClick: undefined,
};
export default ListItemButtonComponent;
