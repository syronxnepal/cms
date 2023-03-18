import { useEffect } from 'react';

import { useErrorBoundary } from 'common/error-boundary';

// Component for showing '404 page not found' message
const NoMatch = () => {
  const { triggerError } = useErrorBoundary();
  useEffect(() => {
    triggerError({ message: 'Not Found', status: 404 });
  }, [triggerError]);

  return null;
};
export default NoMatch;
