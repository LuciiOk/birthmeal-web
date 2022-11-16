import React from "react";
import './ErrorBoundary.scss';

class BoundaryError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container__error main__container">
          <h2>
            Oh, no!, ha ocurrido un error.<br /> Por favor, vuelva a intentarlo más
            tarde.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default BoundaryError;
