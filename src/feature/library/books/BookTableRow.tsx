import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { List, Menu, TableCell, TableRow } from '@mui/material';
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

  const editMenu = (
    <EllipseMenuItem
      checkPermission={false}
      iconElement={<ModeEditOutlineOutlinedIcon />}
      onClick={handleEdit}
      text="Edit Book"
    />
  );
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
        <EllipseMenu>{editMenu}</EllipseMenu>
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
        sx={{ paddingY: 0.5 }}
      >
        <List className="ellipse-menu-list" sx={{ padding: 0.5 }}>
          {editMenu}
        </List>
      </Menu>
    </TableRow>
  );
};

export default BookTableRow;
