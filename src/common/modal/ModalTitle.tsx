import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton, DialogTitle as MuiDialogTitle } from '@mui/material';

interface IProps {
  id: string;
  children?: React.ReactNode;
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ModalTitle = (props: IProps) => {
  const { children, onClose, ...other } = props;

  return (
    <MuiDialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

ModalTitle.defaultProps = {
  children: null,
  onClose: undefined,
};

export default ModalTitle;
