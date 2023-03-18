import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Box, List, useTheme } from '@mui/material';
import { Popover } from 'components';

interface IProps {
  children: React.ReactNode;

  open?: boolean;
}

const EllipseMenu = ({ children, open }: IProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Popover
      buttonIcon={<MoreVertOutlinedIcon />}
      buttonSx={{ width: 32, height: 32 }}
      open={open}
      sx={{
        borderRadius: theme.customBorderRadius.sm,
        padding: 0.5,
        minWidth: 180,
      }}
    >
      <Box>
        <List className="ellipse-menu-list" sx={{ padding: 0.5 }}>
          {children}
        </List>
      </Box>
    </Popover>
  );
};

EllipseMenu.defaultProps = {
  open: false,
};

export default EllipseMenu;
