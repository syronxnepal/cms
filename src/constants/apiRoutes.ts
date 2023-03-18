const apiRoutes = {
  auth: {
    activateAccount: '/auth/activate-account',
    impersonate: '/auth/impersonate',
    revertImpersonate: '/auth/revert-impersonate',
    login: '/auth/login',
    forgetPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    setPassword: '/auth/set-password',
    verifyCode: '/auth/verify-code',
    twoFactorAuthentication: '/auth/two-factor-authentication',
  },
  book: {
    getAll: '/books',
    add: '/books',
    getOne: '/books/:id',
    edit: '/books/:id',
  },
};

export default apiRoutes;
