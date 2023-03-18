import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PermissionGate from 'common/PermissionGate';

interface IProps {
  iconElement: React.ReactNode;
  text: string;
  onClick?: VoidFunction | undefined;
  checkPermission?: boolean;
}

const EllipseMenuItem = ({
  iconElement,
  text,
  onClick,
  checkPermission,
}: IProps) =>
  checkPermission ? (
    <PermissionGate>
      <ListItem disablePadding onClick={onClick}>
        <ListItemButton>
          <ListItemIcon>{iconElement}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </PermissionGate>
  ) : (
    <ListItem disablePadding onClick={onClick}>
      <ListItemButton>
        <ListItemIcon>{iconElement}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );

EllipseMenuItem.defaultProps = {
  onClick: undefined,
  checkPermission: true,
};

export default EllipseMenuItem;
