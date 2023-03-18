// Reference: https://isamatov.com/react-permissions-and-roles/

import { cloneElement, ReactElement } from 'react';

import { AccessType } from 'enums/auth';
import { useAppDispatch } from 'stores/hooks';
import { changeMessageOption } from 'stores/messageModal';
import { checkPermission } from 'utils/common';

interface Props {
  children: ReactElement;
  errorProps?: any;
  checkClickEvent?: boolean;
  RenderErrorMessage?: ReactElement;
}

const PermissionGate = ({
  children,
  errorProps,
  checkClickEvent = true,
  RenderErrorMessage,
}: Props) => {
  const dispatch = useAppDispatch();

  const access = {
    read: checkPermission(),
    write: checkPermission(AccessType.WRITE),
  };

  const readOnlyAccess = access.read && !access.write;

  const onClickHandler = () => {
    dispatch(
      changeMessageOption({
        open: true,
        alertMessage:
          'You can set write permission through permissions options in admin menu',
      })
    );
  };

  if (!access.read && RenderErrorMessage) return RenderErrorMessage;

  if (readOnlyAccess && errorProps && checkClickEvent)
    return cloneElement(children, { ...errorProps, onClick: onClickHandler });

  if (readOnlyAccess && !errorProps && checkClickEvent)
    return cloneElement(children, { onClick: onClickHandler });

  if (readOnlyAccess && errorProps && !checkClickEvent)
    return cloneElement(children, { ...errorProps });

  if (readOnlyAccess && !errorProps && !checkClickEvent) {
    throw Error(
      'Write Acccess not handled: Either provide `errorProps` or set `checkClickEvent` to true'
    );
  }

  return children;
};

export default PermissionGate;
