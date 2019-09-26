import React, { createContext } from "react";

const context = createContext();

const { Provider, Consumer } = context;

class AppProvider extends React.Component {
  state = {
    isFooterInView: false,
    footerOffsetTop: null
  };

  actions = {
    setFooterInView: value => {
      this.setState({ isFooterInView: value });
    },
    setFooterOffsetTop: value => {
      this.setState({ footerOffsetTop: value }, () => {
        console.log(this.state.footerOffsetTop);
      });
    }
  };

  render() {
    const { state, actions } = this;

    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

const useContext = WrappedComponent =>
  class UseContext extends React.Component {
    render() {
      return (
        <Consumer>
          {context => {
            return <WrappedComponent context={context} />;
          }}
        </Consumer>
      );
    }
  };

export { AppProvider, useContext };
