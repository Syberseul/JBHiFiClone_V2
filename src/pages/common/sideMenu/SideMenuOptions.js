import React from "react";

import "./SideMenuOptions.css";

function SideMenuOptions({ Icon, title, upperWrapper = true, style }) {
  return (
    <div className="sideMenuOptions">
      <div className="sideMenuOption__line" style={style}>
        <Icon className="sideMenuOption__icon" />
        <p>{title}</p>
      </div>
      <div>{upperWrapper && ">"}</div>
    </div>
  );
}

export default SideMenuOptions;
