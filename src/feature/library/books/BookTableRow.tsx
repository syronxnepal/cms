import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import { Menu, MenuItem, TableCell, TableRow } from '@mui/material';
import { EllipseMenu, EllipseMenuItem } from 'components';
import ModalKey from 'enums/ModalKey';

interface IProps {
  data: any;
}

const BookTableRow = ({ data }: IProps): JSX.Element => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`modal?type=${ModalKey.ADD_BOOK}&id=${data.id}`);
  };

  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <TableRow
      onContextMenu={handleContextMenu}
      style={{ cursor: 'context-menu' }}
    >
      <TableCell align="left">{data.name}</TableCell>
      <TableCell align="left">{data.author}</TableCell>
      <TableCell align="left">{data.isbn}</TableCell>
      <TableCell align="left">{data.publication}</TableCell>

      <TableCell align="right">
        <EllipseMenu>
          <EllipseMenuItem
            checkPermission={false}
            iconElement={<SegmentOutlinedIcon />}
            onClick={handleEdit}
            text="Edit Book"
          />
        </EllipseMenu>
      </TableCell>
      <Menu
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        anchorReference="anchorPosition"
        onClose={handleClose}
        open={contextMenu !== null}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
        <MenuItem onClick={handleClose}>Highlight</MenuItem>
        <MenuItem onClick={handleClose}>Email</MenuItem>
      </Menu>
    </TableRow>
  );
};

export default BookTableRow;
