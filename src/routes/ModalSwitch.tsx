import { Navigate, useSearchParams } from 'react-router-dom';

import uiRoutes from 'constants/uiRoutes';
import ModalKey from 'enums/ModalKey';
import PermissionModal from 'feature/account-settings/settings/modal/PermissionModal';
import AddBookModal from 'feature/library/books/modal/AddBookModal';
import AddOrganizationModal from 'feature/organization/modal/AddOrganizationModal';

const ModalSwitch = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  if (type === ModalKey.ADD_ORGANIZATION) return <AddOrganizationModal />;
  if (type === ModalKey.ADD_BOOK) return <AddBookModal />;
  if (type === ModalKey.PERMISSIONS) return <PermissionModal />;

  return <Navigate replace to={uiRoutes.pageNotFound} />;
};

export default ModalSwitch;
