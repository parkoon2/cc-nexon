import React, { createRef } from "react";
import "./index.css";
import classNames from "classnames";
import logo from "../../images/logo.png";
import { useContext } from "../../context";

class Footer extends React.Component {
  state = {
    languageToggle: false
  };

  footerRef = createRef();

  toggleLanguage = () => {
    this.setState(prevState => {
      return {
        languageToggle: !prevState.languageToggle
      };
    });
  };

  componentDidMount() {
    const { actions } = this.props.context;
    actions.setFooterOffsetTop(this.footerRef.current.offsetTop);

    window.onresize = e => {
      actions.setFooterOffsetTop(this.footerRef.current.offsetTop);
    };

    window.onscroll = e => {
      if (
        window.scrollY + window.innerHeight >
        this.footerRef.current.offsetTop
      ) {
        actions.setFooterInView(true);
      } else {
        actions.setFooterInView(false);
      }
    };
  }

  render() {
    const { languageToggle } = this.state;

    return (
      <footer ref={this.footerRef}>
        <div className="notice">
          <div className="title">
            <a href="/">
              [공지] 9/22(일) 넥슨페이 은행계좌/가상계좌 결제 서비스 점검 안내
            </a>
          </div>
          <div className="social-icons">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/">회사소개</a>
            </li>
            <li>
              <a href="/">채용안내</a>
            </li>
            <li>
              <a href="/">윤리경영</a>
            </li>
            <li>
              <a href="/">이용약관 </a>
            </li>
          </ul>
          <div
            className={classNames("language", { open: languageToggle })}
            onClick={this.toggleLanguage}
          >
            <ul className="language-list">
              <li>GLOBAL</li>
              <li>THAIWAN</li>
              <li>JAPAN</li>
            </ul>
            <div className="selected-language">
              <span>KOREA</span>
              <i className="fas fa-globe"></i>
            </div>
          </div>
        </nav>
        <div className="address">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br />
            since the 1500s
            <br />
          </p>
          <p className="copyright">Contrary to popular belief, Lorem Ipsum</p>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </footer>
    );
  }
}

export default useContext(Footer);
