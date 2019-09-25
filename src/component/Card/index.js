import React from "react";
import "./index.css";
const Card = () => {
  return (
    <div className="card-box">
      <div className="image-container">
        <div className="card-image"></div>
      </div>
      <div className="card-info">
        <div className="title">메이플스토리</div>
        <div className="sub-title">
          <span className="event">event</span>보름달 도깨비 야시장
        </div>
      </div>
      <div className="type">
        <i class="fas fa-desktop"></i>
        <span>RPG</span>
      </div>
    </div>
  );
};

export default Card;
