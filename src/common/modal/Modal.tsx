import * as React from 'react';

import {
  Box,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from '@mui/material';

import ModalTitle from './ModalTitle';

interface IProps extends MuiDialogProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  handleClose?: VoidFunction;
  // icon?: FontAwesomeIconType;
}

const Modal = ({
  open,
  handleClose,
  title,
  children,
  // icon,
  ...others
}: IProps) => {
  // a random icon if icon not present.
  // Needed 'cause Typescript was showing type error
  // Not rendered whatsoever if icon is not present
  // const Icon = icon ? Icons[icon] : Icons.faFile;

  const onClose = (event: React.MouseEvent<HTMLElement>, reason?: string) => {
    if (reason && reason === 'backdropClick') return;

    if (handleClose) {
      handleClose();
    }
  };

  return (
    <MuiDialog
      aria-labelledby="modal-title"
      disableEscapeKeyDown
      fullWidth
      onClose={onClose}
      open={open}
      {...others}
    >
      <ModalTitle id="modal-title" onClose={handleClose}>
        {/* {icon && <Box component={FontAwesomeIcon} icon={Icon} mr={1} />} */}

        {title}
      </ModalTitle>
      {children}
    </MuiDialog>
  );
};

Modal.defaultProps = {
  // icon: null,
  handleClose: undefined,
};

export default Modal;
