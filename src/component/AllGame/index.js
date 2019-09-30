import React, { createRef } from "react";
import "./index.css";
import Card from "../Card";
import MobileCard from "../MobileCard";
import FloatingMenu from "../FloatingMenu";
class AllGames extends React.Component {
  mobileRef = createRef();
  pcRef = createRef();

  state = {
    currentView: "thumbnail" // thunmbnail or list
  };

  scrollToMobile = () => {
    this.mobileRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  scrollToPC = () => {
    this.pcRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  handleViewChange = e => {
    this.setState({
      currentView: e.target.id
    });
  };

  render() {
    const { currentView } = this.state;
    return (
      <div className="all-games">
        <div className="header">
          <div className="title">
            <h2>전체게임</h2>
            <div className="view-type">
              <input
                type="radio"
                id="thumbnail"
                name="view-type"
                checked={currentView === "thumbnail"}
                onChange={this.handleViewChange}
              ></input>
              <span>
                <label htmlFor="thumbnail">
                  <i className="fas fa-th-large"></i>
                </label>
              </span>

              <input
                type="radio"
                id="list"
                name="view-type"
                checked={currentView === "list"}
                onChange={this.handleViewChange}
              ></input>
              <span>
                <label htmlFor="list">
                  <i className="fas fa-list"></i>
                </label>
              </span>
            </div>
          </div>
          <div className="search-bar">
            <input placeholder="게임명 검색"></input>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="filter">
          <a href="/" className="selected">
            #전체
          </a>
          <a href="/">#최근 게이머가 많은 TOP10</a>
          <a href="/">#오래 플레이하는 TOP10</a>
          <a href="/">#RPG</a>
          <a href="/">#액션 RPG</a>
          <a href="/">#AOS/MOBA</a>
          <a href="/">#FPS</a>
          <a href="/">#캐주얼</a>
          <a href="/">#스포츠</a>
          <a href="/">#이벤트</a>
          <a href="/">#업데이트</a>
          <a href="/">#신규게임</a>
        </div>
        <div className="pc">
          <div className="type">
            <h2 ref={this.pcRef}>PC게임</h2>
            <h2 className="type-mobile" onClick={this.scrollToMobile}>
              모바일게임
            </h2>
          </div>
          <div className="pc-games">
            <Card width="302px" mb />
            <Card width="302px" mb />
            <Card width="302px" mb />
            <Card width="302px" mb />
            <Card width="302px" mb />
          </div>
        </div>
        <div className="mobile" ref={this.mobileRef}>
          <h2 className="type">모바일게임</h2>
          <div className="mobile-games">
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
          </div>
        </div>
        <FloatingMenu
          scrollToMobile={this.scrollToMobile}
          scrollToPC={this.scrollToPC}
        />
      </div>
    );
  }
}

export default AllGames;
