import React, { createRef } from "react";
import { useContext } from "../../context";
import "./index.css";

class FloatingMenu extends React.Component {
  menuRef = createRef();
  state = {
    visible: true
  };

  scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    const { visible } = this.state;
    const { state } = this.props.context;

    return (
      <>
        {visible && (
          <div
            className="floating-menu"
            ref={this.menuRef}
            style={
              state.isFooterInView
                ? {
                    position: "absolute",
                    top: `${this.props.context.state.footerOffsetTop - 140}px`,
                    right: "30px"
                  }
                : {
                    position: "fixed",
                    bottom: "30px",
                    right: "30px"
                  }
            }
          >
            <div className="game" onClick={this.props.scrollToPC}>
              <i class="fas fa-desktop"></i>
              <span>PC게임</span>
            </div>
            <div className="game" onClick={this.props.scrollToMobile}>
              <i class="fas fa-mobile-alt"></i>
              <span>모바일게임</span>
            </div>
            <div className="top" onClick={this.scrollToTop}>
              <i class="fas fa-arrow-up"></i>
              <span>TOP</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default useContext(FloatingMenu);
