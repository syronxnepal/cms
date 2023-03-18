import React from 'react';
import { QueryErrorResetBoundary } from 'react-query';

import ErrorBoundary from './error-boundary';

const LazyLoadComponent = (Component: React.ComponentType) => (props: any) =>
  (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <React.Suspense fallback={<>...</>}>
          <ErrorBoundary onReset={reset}>
            <Component {...props} />
          </ErrorBoundary>
        </React.Suspense>
      )}
    </QueryErrorResetBoundary>
  );

export default LazyLoadComponent;
