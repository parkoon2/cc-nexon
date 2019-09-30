import React, { createContext } from "react";

const context = createContext();

const { Provider, Consumer } = context;

class AppProvider extends React.Component {
  state = {
    isFooterInView: false,
    footerOffsetTop: null,
    isSideMenuVisible: false
  };

  actions = {
    setFooterInView: value => {
      this.setState({ isFooterInView: value });
    },
    setFooterOffsetTop: value => {
      this.setState({ footerOffsetTop: value });
    },
    setSideMenuVisible: value => this.setState({ isSideMenuVisible: value })
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
            return <WrappedComponent context={context} {...this.props} />;
          }}
        </Consumer>
      );
    }
  };

export { AppProvider, useContext };
