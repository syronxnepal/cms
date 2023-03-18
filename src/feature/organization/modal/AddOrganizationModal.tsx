import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Modal } from 'common';

const AddOrganizationModal = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const id = searchParams.get('id'); // organization Id
  const isEditMode = !!id;

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <Modal
      handleClose={handleClose}
      // icon={isEditMode ? 'faUserEdit' : 'faUserPlus'}
      open
      title={isEditMode ? 'Edit Organization' : 'Add Organization'}
    >
      Hello
    </Modal>
  );
};

export default AddOrganizationModal;
