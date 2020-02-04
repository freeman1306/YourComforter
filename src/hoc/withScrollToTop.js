import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

const withScrollToTop = WrappedComponent => {
  class ScrollToTop extends PureComponent {
    componentDidUpdate(prevProps) {
      const { location } = this.props;

      if (location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return withRouter(ScrollToTop);
};

export default withScrollToTop;
