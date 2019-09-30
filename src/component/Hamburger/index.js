import React from "react";
import "./index.css";

import { useContext } from "../../context";

const Hamburger = ({ context }) => (
  <div
    className="hamburger"
    onClick={() => {
      document.body.style.overflow = "hidden";
      context.actions.setSideMenuVisible(true);
    }}
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default useContext(Hamburger);
