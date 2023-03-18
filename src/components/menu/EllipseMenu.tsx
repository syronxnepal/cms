import SegmentIcon from '@mui/icons-material/Segment';
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
      buttonIcon={<SegmentIcon />}
      buttonSx={{ width: 32, height: 32 }}
      open={open}
      sx={{
        borderRadius: theme.customBorderRadius.sm,
        padding: 1,
        minWidth: 180,
      }}
    >
      <Box>
        <List className="ellipse-menu-list">{children}</List>
      </Box>
    </Popover>
  );
};

EllipseMenu.defaultProps = {
  open: false,
};

export default EllipseMenu;
