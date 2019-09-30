import React from "react";
import "./index.css";
import classNames from "classnames";
import GameGroup from "../GameGroup";
import { useContext } from "../../context";

const SideMenu = ({ context }) => (
  <>
    <div
      className={classNames("dim", { on: context.state.isSideMenuVisible })}
    ></div>
    <div
      className={classNames("side-menu", {
        on: context.state.isSideMenuVisible
      })}
    >
      <div className="close">
        <div
          className="close-btn"
          onClick={() => {
            document.body.style.overflow = "visible";
            context.actions.setSideMenuVisible(false);
          }}
        >
          <span></span>
          <span></span>
        </div>
      </div>

      <main className="side-menu-main">
        <div className="tab">
          <div className="tab-left">
            <a href="/" className="tab-link selected">
              PC 게임
            </a>
            <a href="/" className="tab-link">
              모바일 게임
            </a>
          </div>

          <div className="tab-right">
            <div className="help-desk">고객센터</div>
          </div>
        </div>

        <div className="game-groups">
          <div className="group-left">
            <GameGroup></GameGroup>
            <GameGroup></GameGroup>
            <GameGroup></GameGroup>
          </div>
          <div className="group-right">
            <GameGroup></GameGroup>
            <GameGroup></GameGroup>
            <GameGroup></GameGroup>
          </div>
        </div>
      </main>

      <div className="side-menu-footer">
        <div className="col1">
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>내정보</span>
          </div>
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>이벤트</span>
          </div>
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>넥슨캐시</span>
          </div>
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>보안센터</span>
          </div>
        </div>
        <div className="col2">
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>공지사항</span>
          </div>
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>넥슨플레이</span>
          </div>
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>고객센터</span>
          </div>
        </div>
        <div className="col3">
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>넥슨달력</span>
          </div>
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>스쿨존</span>
          </div>
          <div className="item">
            <i class="fas fa-info-circle"></i>
            <span>전체서비스</span>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default useContext(SideMenu);
