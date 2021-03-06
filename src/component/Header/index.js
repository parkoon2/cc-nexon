import React from "react";
import "./index.css";

// Context
import { useContext } from "../../context";

const Header = ({ context }) => {
  return (
    <header>
      <div
        className="menu"
        onClick={() => {
          document.body.style.overflow = "hidden";
          context.actions.setSideMenuVisible(true);
        }}
      >
        <i className="fas fa-bars"></i>
        <span className="menu-title">메뉴</span>
      </div>
      <div className="title">nexon</div>
      <div className="right-btns">
        <div className="pc">
          PC방<span>off</span>
        </div>
        <div className="register">회원가입</div>
        <div className="login">로그인</div>
      </div>
    </header>
  );
};

export default useContext(Header);
