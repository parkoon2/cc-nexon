import React, { createRef } from "react";
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

  //   componentDidMount() {
  //     window.onscroll = e => {
  //       console.log("window.scrollY");
  //       console.log(
  //         "document.body.scrollHeight",
  //         document.body.scrollHeight - window.scrollY
  //       );
  //     };
  //   }

  componentWillUnmount() {}

  render() {
    const { visible } = this.state;
    return (
      <>
        {visible && (
          <div className="floating-menu" ref={this.menuRef}>
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

export default FloatingMenu;
