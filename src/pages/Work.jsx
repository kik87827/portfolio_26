import React from "react";

const Work = () => {
  return (
    <section className="middle-wrap">
      <div className="middle-templete">
        <div className="middle-left-cols">
          <div className="middle-left-item">
            <h2 className="middle-left-title">WORK</h2>
            <ul className="middle-menu-list">
              <li>
                <button
                  className="middle-menu active"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  PORTFOLIO
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="middle-right-cols">
          <div className="middle-right-content">
            <div className="gallery-wrap">
              <ul className="gallery-list"></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
