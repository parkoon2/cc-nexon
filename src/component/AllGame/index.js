import React from "react";
import "./index.css";
import Card from "../Card";
const AllGames = () => (
  <div className="all-games">
    <div className="header">
      <div className="title">
        <h2>전체게임</h2>
        <div className="view-type">
          <input type="radio" id="thumbnail" name="view-type" checked></input>
          <span>
            <label for="thumbnail">
              <i class="fas fa-th-large"></i>
            </label>
          </span>
          <input type="radio" id="list" name="view-type"></input>
          <span>
            <label for="list">
              <i class="fas fa-list"></i>
            </label>
          </span>
        </div>
      </div>
      <div className="search-bar">
        <input placeholder="게임명 검색"></input>
        <i class="fas fa-search"></i>
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
        <h2>PC게임</h2>
        <h2 className="mobile">모바일게임</h2>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
);

export default AllGames;
