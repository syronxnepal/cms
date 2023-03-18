import { useEffect, useRef, useState } from 'react';

import {
  Button,
  IconButton,
  Popover as MuiPopover,
  SxProps,
  Theme,
  useTheme,
} from '@mui/material';

interface Props {
  buttonIcon: React.ReactNode;
  children: React.ReactNode;
  isIconButton?: boolean;
  sx?: SxProps;
  buttonSx?: SxProps<Theme>;
  buttonText?: string;
  open?: boolean;
  setOpen?: any;
  buttonSize?: 'small' | 'medium';
  closeHandler?: VoidFunction;
}

const Popover = ({
  children,
  isIconButton,
  buttonIcon,
  sx,
  buttonSx,
  buttonText,
  open,
  setOpen,
  closeHandler,
  buttonSize,
  ...other
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const btnRef = useRef<null | HTMLButtonElement>(null);

  const handleClose = () => {
    setAnchorEl(null);

    if (closeHandler) {
      closeHandler();
    }
  };

  const handleMouseLeave = () => {
    if (open) return;
    handleClose();
  };

  useEffect(() => {
    if (open) {
      btnRef?.current?.click();
    } else {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (setOpen) {
      setOpen(true);
    }
    setAnchorEl(event.currentTarget);
  };

  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'simple-popover' : undefined;

  const theme = useTheme();

  return (
    <>
      {isIconButton ? (
        <IconButton
          aria-label="popover-trigger-button"
          onClick={handleClick}
          ref={btnRef}
          size={buttonSize}
          sx={{ ...buttonSx }}
        >
          {buttonIcon}
        </IconButton>
      ) : (
        <Button
          onClick={handleClick}
          ref={btnRef}
          size="medium"
          startIcon={buttonIcon}
          sx={{ ...buttonSx }}
          variant="neutral"
        >
          {buttonText}
        </Button>
      )}

      <MuiPopover
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        disableRestoreFocus
        disableScrollLock={false}
        id={id}
        onClose={handleClose}
        open={isOpen}
        PaperProps={{
          onMouseLeave: handleMouseLeave,
          sx: {
            mt: 0.5,
            p: 2,
            minWidth: 200,
            overflow: 'inherit',
            boxShadow: theme.customShadows.high,
            borderRadius: theme.customBorderRadius.xs,
            ...sx,
          },
        }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        {...other}
      >
        {children}
      </MuiPopover>
    </>
  );
};

Popover.defaultProps = {
  sx: null,
  buttonSx: null,
  isIconButton: true,
  buttonText: '',
  open: false,
  setOpen: null,
  closeHandler: undefined,
  buttonSize: 'medium',
};

export default Popover;
