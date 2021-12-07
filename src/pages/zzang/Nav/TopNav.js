import React from "react";
import "./TopNav.scss";


function TopNav(){
    return(
    <div className="nav_wrap">
        <div className="header">
            <div className="nav_wrap">
                <h1>WeBucks</h1>
                <nav className="global_nav">
                    <ul>COFFEE</ul>
                    <ul>MENU</ul>
                    <ul>STORE</ul>
                    <ul>RESPONSIBILITY</ul>
                    <ul>STARBUCKS REWARDS</ul>
                    <ul>WHAT'S NEW</ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

export default TopNav;