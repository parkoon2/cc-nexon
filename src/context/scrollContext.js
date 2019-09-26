import React, { createContext } from "react";

const scrollContext = createContext();

const { Provider, Consumer: ScrollConsumer } = scrollContext;

class ScrollProvider extends React.Component {
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

const useScroll = WrappedComponent =>
  class UseScroll extends React.Component {
    render() {
      return (
        <ScrollConsumer>
          {context => {
            return <WrappedComponent context={context} />;
          }}
        </ScrollConsumer>
      );
    }
  };

export { ScrollProvider, ScrollConsumer, useScroll };
