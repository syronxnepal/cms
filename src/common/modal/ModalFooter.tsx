import { ReactNode } from 'react';

import { LoadingButton } from '@mui/lab';
import { Button, DialogActions } from '@mui/material';

interface IProps {
  actionButtonIcon?: ReactNode;
  actionButtonType?: 'submit' | 'button';
  actionButtonLabel?: string;
  cancelButtonType?: 'cancel' | 'back' | 'close' | 'previous';
  onActionButtonClick?: VoidFunction;
  onCancelButtonClick?: VoidFunction;
  isDisabled?: boolean;
  isLoading: boolean;
  isCancelRequired?: boolean;
  isActionRequired?: boolean;
}

const ModalFooter = ({
  isLoading,
  isDisabled,
  actionButtonType,
  actionButtonIcon,
  cancelButtonType,
  actionButtonLabel,
  onActionButtonClick,
  onCancelButtonClick,
  isCancelRequired,
  isActionRequired,
}: IProps) => {
  const actionButtonClickHandler = () => {
    if (onActionButtonClick && actionButtonType === 'button') {
      onActionButtonClick();
    }
  };

  const getCancelButtonType = () => {
    if (cancelButtonType === 'cancel') return 'Cancel';
    if (cancelButtonType === 'close') return 'Close';
    if (cancelButtonType === 'previous') return 'Previous';
    return 'Back';
  };
  return (
    <DialogActions
      className={`${!isCancelRequired ? 'flex-end' : 'flex-space-between'}`}
    >
      {isCancelRequired && (
        <Button
          color="secondary"
          disabled={isLoading}
          onClick={onCancelButtonClick}
          size="medium"
          type="button"
          variant="neutral"
        >
          {getCancelButtonType()}
        </Button>
      )}

      {isActionRequired && (
        <LoadingButton
          color="secondary"
          disabled={isDisabled}
          loading={isLoading}
          onClick={actionButtonClickHandler}
          size="medium"
          startIcon={actionButtonIcon}
          type={actionButtonType}
          variant="contained"
        >
          {actionButtonLabel}
        </LoadingButton>
      )}
    </DialogActions>
  );
};

ModalFooter.defaultProps = {
  actionButtonIcon: undefined,
  actionButtonLabel: 'Save',
  actionButtonType: 'submit',
  cancelButtonType: 'cancel',
  isDisabled: false,
  onActionButtonClick: undefined,
  onCancelButtonClick: undefined,
  isCancelRequired: true,
  isActionRequired: true,
};

export default ModalFooter;
