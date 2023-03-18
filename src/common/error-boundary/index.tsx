import React from 'react';

import { IComposeError } from 'interface/http';

import ErrorFallBack from './ErrorFallBack';

interface IState extends IComposeError {
  hasError: boolean;
}

interface IErrorBoundaryContext {
  triggerError(args: IComposeError): void;
  resetError(): void;
}

const ErrorBoundaryContext = React.createContext<IErrorBoundaryContext>(null!);

export default class ErrorBoundary extends React.Component<any, IState> {
  constructor(props: React.ReactPropTypes) {
    super(props);
    this.state = {
      hasError: false,
      message: '',
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error & IComposeError) {
    const { message, status } = error;
    this.setState({ message, status });
  }

  triggerError = (args: IComposeError) => {
    this.setState({ hasError: true, ...args });
  };

  resetError = () => {
    this.setState({ hasError: false });
    this.props?.onReset();
  };

  render() {
    const { hasError, ...rest } = this.state;
    const { children } = this.props;
    return (
      <ErrorBoundaryContext.Provider
        //  FIXME: eslint issue
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{ triggerError: this.triggerError, resetError: this.resetError }}
      >
        {hasError ? (
          <ErrorFallBack resetError={this.resetError} {...rest} />
        ) : (
          children
        )}
      </ErrorBoundaryContext.Provider>
    );
  }
}

export const useErrorBoundary = () => React.useContext(ErrorBoundaryContext);
