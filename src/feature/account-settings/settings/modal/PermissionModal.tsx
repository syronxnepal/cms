import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DialogContent } from '@mui/material';
import { Modal, ModalFooter } from 'common/modal';

const PermissionModal = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <Modal
      handleClose={handleClose}
      // icon={isEditMode ? 'faUserEdit' : 'faUserPlus'}
      open
      title="Permissions"
    >
      <DialogContent>abcd</DialogContent>
      <ModalFooter
        isDisabled={false}
        isLoading={false}
        onCancelButtonClick={handleClose}
      />
    </Modal>
  );
};

export default PermissionModal;
