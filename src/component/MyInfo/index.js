import React from "react";
import "./index.css";
import Card from "../Card";

class MyInfo extends React.Component {
  render() {
    return (
      <div className="my-info">
        <div className="my-info-title">
          <h2>추천게임</h2>
          <span>고객센터</span>
        </div>

        <section className="my-info-body">
          <div className="recommend-card-list">
            <Card width="152px"></Card>
            <Card width="152px"></Card>
            <Card width="152px"></Card>
            <Card width="152px"></Card>
            <Card width="152px"></Card>
          </div>
          <div className="login">
            <div className="login-btn">NEXON ID 로그인</div>
            <div>
              <div className="login-once">일회용 로그인</div>
              <div className="login-qr">QR로그인</div>
            </div>
            <div className="login-sns">
              <span>다른 계정 간편 로그인</span>
              <div className="social-icons">
                <i className="fab fa-youtube"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
            <div className="etc">
              <div className="find">
                <a href="/">넥슨 ID찾기</a>
                <a href="/">비밀번호 찾기</a>
              </div>
              <div className="join">
                <a href="/">회원가입</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MyInfo;
