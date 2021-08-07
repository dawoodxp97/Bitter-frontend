import React from "react";
import "./Styles/SidebarOptions.css";
function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon id="_icon_" />
      <h2 id="icon_title">{text}</h2>
    </div>
  );
}

export default SidebarOptions;
