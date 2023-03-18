import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';

import ModalTitle from './ModalTitle';

interface IProps {
  cancelButtonLabel?: string;
  isOpen: boolean;
  onCancel: VoidFunction;
  onConfirm: VoidFunction;
  modalTitle: string;
  modalContent: string | JSX.Element;
  modalContentExtra?: string | JSX.Element;
  isSubmitting: boolean;
  submitButtonLabel?: string;
  isAdditionalContentRequired?: boolean;
}

const ConfirmationModal = ({
  cancelButtonLabel,
  isOpen,
  onCancel,
  onConfirm,
  modalTitle,
  modalContent,
  isSubmitting,
  submitButtonLabel,
  modalContentExtra,
  isAdditionalContentRequired,
}: IProps): JSX.Element => {
  const handleClose = (
    event: React.MouseEvent<HTMLElement>,
    reason?: string
  ) => {
    if (reason && reason === 'backdropClick') return;
    onCancel();
  };

  return (
    <Dialog
      disableEscapeKeyDown
      fullWidth
      maxWidth="sm"
      onClose={handleClose}
      open={isOpen}
    >
      <ModalTitle id="update-client-dialog-title" onClose={handleClose}>
        {modalTitle}
      </ModalTitle>
      <DialogContent dividers>
        <Typography color="text.secondary" variant="body1">
          {modalContent}
          {isAdditionalContentRequired
            ? '. This process is irreversible. If you are not sure, you can cancel.'
            : ''}
        </Typography>
        {modalContentExtra}
      </DialogContent>
      <DialogActions className="flex-space-between">
        <Button
          disabled={isSubmitting}
          onClick={handleClose}
          size="medium"
          type="button"
          variant="neutral"
        >
          {cancelButtonLabel}
        </Button>
        <LoadingButton
          loading={isSubmitting}
          onClick={onConfirm}
          size="medium"
          type="button"
          variant="contained"
        >
          {submitButtonLabel}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
ConfirmationModal.defaultProps = {
  cancelButtonLabel: 'Cancel',
  submitButtonLabel: 'Submit',
  modalContentExtra: undefined,
  isAdditionalContentRequired: true,
};

export default ConfirmationModal;
