import React, { forwardRef } from "react";
import useHeaderControl from "../../assets/js/ui_header";
import { useMatch, useNavigate } from "react-router-dom";

const Header = forwardRef(function Header(props, ref) {
  const aboutMatch = useMatch("/about/*");
  const workMatch = useMatch("/work/*");
  const navigate = useNavigate();
  const {
    mobilePanelZone,
    mobilePanelWrap,
    handleMobilePanelOpen,
    handleMobilePanelClose,
  } = useHeaderControl();

  return (
    <header className="header-wrap" ref={ref}>
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
                <button
                  className={["nav-item", aboutMatch && "active"]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button
                  className={["nav-item", workMatch && "active"]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/work");
                  }}
                >
                  WORK
                </button>
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
        <button className="btn-panel-menu" onClick={handleMobilePanelOpen}>
          <span className="btn-panel-menu-ico"></span>
          <span className="hdtext">메인 메뉴 열기</span>
        </button>
        <div className="mobile-menu-zone" ref={mobilePanelZone}>
          <div className="mobile-menu-wrap" ref={mobilePanelWrap}>
            <div className="mobile-menu-inner">
              <ul className="mobile-menu-list">
                <li>
                  <button className="mobile-menu" onClick={() => navigate("/")}>
                    ABOUT
                  </button>
                </li>
                <li>
                  <button className="mobile-menu" onClick={() => navigate("/work")}>
                    WORK
                  </button>
                </li>
              </ul>
            </div>
            <button
              className="btn-mobile-menu-close"
              onClick={handleMobilePanelClose}
            >
              <span className="hdtext">메인 메뉴 닫기</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
