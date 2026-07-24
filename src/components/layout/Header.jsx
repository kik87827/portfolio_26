import React from "react";

const Header = () => {
  return (
    <header className="header-wrap">
      <div className="header-inner">
        <h1 className="toplogo">
          <button className="toplogo-link">
            <img src="/images/toplogo_uik_2x2.png" alt="UIK" />
            <span className="toplogo-text">Frontend Developer</span>
          </button>
        </h1>
        <div className="header-main-cols">
          <nav className="nav-wrap">
            <ul className="nav-list">
              <li>
                <button className="nav-item active">ABOUT</button>
              </li>
              <li>
                <button className="nav-item">WORK</button>
              </li>
            </ul>
          </nav>
          <div className="util-item-wrap">
            <ul className="util-item-list">
              <li>
                <span className="util-item">
                  <img src="/images/react_logo.svg" alt="v" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn-panel-menu">
          <span className="btn-panel-menu-ico"></span>
          <span className="hdtext">메인 메뉴 열기</span>
        </button>
        <div className="mobile-menu-zone">
          <div className="mobile-menu-wrap">
            <div className="mobile-menu-inner">
              <ul className="mobile-menu-list">
                <li>
                  <button className="mobile-menu">ABOUT</button>
                </li>
                <li>
                  <button className="mobile-menu">WORK</button>
                </li>
              </ul>
            </div>
            <button className="btn-mobile-menu-close">
              <span className="hdtext">메인 메뉴 닫기</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
