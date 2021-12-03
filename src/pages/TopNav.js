import React from "react";
import "../styles/reset.scss";
import "./TopNav.scss";

function TopNav() {
  return (
    <nav className="navi">
      <h1 className="nav-title">WeBucks</h1>
      <ul className="menu-lists">
        <li className="menu-name">COFFEE</li>
        <li className="menu-name">MENU</li>
        <li className="menu-name">STORE</li>
        <li className="menu-name" id="last-menu-name">WHAT'S NEW</li>
      </ul>
    </nav>
  );
}



export default TopNav;