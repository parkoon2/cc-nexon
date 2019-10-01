import React from "react";
import "./index.css";

const MobileCard = () => {
  return (
    <div className="mobile-card">
      <img src={require("../../images/mobile-card.png")} alt="game" />
      <div className="info">
        <div className="title">
          <h2>
            V4 <span className="event">EVENT</span>
          </h2>
          <div className="genre">MMORPG</div>
        </div>
        <div className="shop">
          <i className="fab fa-android android"></i>
          <i className="fab fa-apple ios"></i>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
