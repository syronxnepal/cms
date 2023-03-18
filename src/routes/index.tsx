import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import MainLayout from 'common/layout/main-layout';
import PublicLayout from 'common/layout/PublicLayout';
import LazyLoader from 'common/LazyLoader';
import uiRoutes from 'constants/uiRoutes';
import Profile from 'feature/account-settings/profile';
import Settings from 'feature/account-settings/settings';
import Dashboard from 'feature/dashboard';
import Books from 'feature/library/books';
import Borrower from 'feature/library/borrower';
import Fine from 'feature/library/fine';
import Login from 'feature/login';
import Organization from 'feature/organization';
import Admin from 'feature/users/admin';
import Parents from 'feature/users/parents';
import Students from 'feature/users/students';
import { getLocal } from 'utils/storage';

const NoMatch = LazyLoader(
  React.lazy(() => import('../feature/misc/no-match'))
);
const ModalSwitch = LazyLoader(React.lazy(() => import('./ModalSwitch')));

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  const isAuthenticated = !!getLocal('jwtToken');
  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  return children;
};

const Router = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      {/* <Route element={<Login />} path="/" /> */}
      <Route element={<Login />} path="/login" />
      <Route element={<Organization />} path={uiRoutes.organization}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
    </Route>
    <Route element={<MainLayout />}>
      <Route element={<Dashboard />} path="/" />
      <Route element={<Books />} path={uiRoutes.books}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
      <Route element={<Settings />} path={uiRoutes.settings}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
      <Route element={<Profile />} path={uiRoutes.profile}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
      <Route element={<Students />} path={uiRoutes.students}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
      <Route element={<Admin />} path={uiRoutes.admins}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
      <Route element={<Parents />} path={uiRoutes.parents}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
      <Route element={<Borrower />} path={uiRoutes.borrow}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
      <Route element={<Fine />} path={uiRoutes.fine}>
        <Route element={<ModalSwitch />} path={uiRoutes.modal} />
      </Route>
      {/* <Route element={<PublicPage />} path="/" /> */}
      <Route
        element={
          // <RequireAuth>
          <Dashboard />
          // </RequireAuth>
        }
        path="/dashboard"
      />
      {/* <Route
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
          path="/protected"
        /> */}
    </Route>
    {/* No match found should have the lowest precedence */}
    <Route element={<NoMatch />} path="*" />
  </Routes>
);

export default Router;
