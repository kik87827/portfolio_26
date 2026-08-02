import React, { useEffect, useState } from "react";

const Work = () => {
  const [work,setWork] = useState();
  useEffect(()=>{
    fetch('/data.json')
    .then((result) => result.json())
    .then((result) => {
      setWork(result);
    }).catch(error => console.log(error))
  },[]);
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
              <ul className="gallery-list">
                {
                  work && work.map((item,index) => {
                    return (
                      <li key={index}>
                        <div className="gallery-item">
                            <button className="gallery-thum-row" data-view = {item.detailHTML}>
                              <img src={item.image} alt="" />
                            </button>
                            <div className="gallery-spec-row">
                                <div className="gallery-spec-main-wrap">
                                    <div className="gallery-spec-main">{item.specMain}</div>
                                    <a href={item.specLink} target="_blank" title="새창열림" className="gallery-spec-link">
                                      <img src="/images/open-new-window.svg" alt="" />
                                    </a>
                                </div>
                                <div className="gallery-spec-sub-wrap">
                                    <div className="gallery-spec-sub">{item.specSub}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
