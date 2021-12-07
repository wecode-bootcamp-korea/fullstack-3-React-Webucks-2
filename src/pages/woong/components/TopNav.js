import React from 'react';

function TopNav() {
  return (
    <div className="TopNav">
      <section className="webucks">
        <a href="/woong">Webucks</a>
      </section>
      <div className="link">
        <a className="menu" href="/woong/list">
          COFFEE
        </a>
        <a className="menu" href="/woong/list">
          MENU
        </a>
        <a className="menu" href="asdf">
          STORE
        </a>
        <a className="menu" href="asdf">
          WHAT'S NEW
        </a>
      </div>
    </div>
  );
}

export default TopNav;
