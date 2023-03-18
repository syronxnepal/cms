import uiRoutes from 'constants/uiRoutes';

export const libraryChildren = [
  {
    label: 'Books',
    path: uiRoutes.books,
    child: [],
  },
  {
    label: 'Borrower',
    path: uiRoutes.borrow,
    child: [],
  },
  {
    label: 'Fine',
    path: uiRoutes.fine,
    child: [],
  },
];

export const usersChildren = [
  {
    label: 'Students',
    path: uiRoutes.students,
    child: [],
  },
  {
    label: 'Parents',
    path: uiRoutes.parents,
    child: [],
  },
  {
    label: 'Admins',
    path: uiRoutes.admins,
    child: [],
  },
];

export const menuItems = [
  {
    label: 'Dashboard',
    path: uiRoutes.dashboard,
    child: [],
  },

  {
    label: 'Library',
    path: uiRoutes.library,
    child: libraryChildren,
  },
  {
    label: 'Users',
    path: uiRoutes.users,
    child: usersChildren,
  },
];
