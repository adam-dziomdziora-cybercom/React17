import React from 'react';

const withLogger = (WrappedComponent) => {
  // eslint-disable-next-line no-unused-vars
  class HOC extends React.PureComponent {
    componentDidMount() {
      console.log('hej juz jestem, kochaj mnie!');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
};

export default withLogger;
