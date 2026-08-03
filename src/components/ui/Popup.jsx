import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function getPopupRoot() {
  let el = document.getElementById("popup-root");
  if (!el) {
    el = document.createElement("div");
    el.id = "popup-root";
    document.body.appendChild(el);
  }
  return el;
}

export default function Popup({ title, children, onClose, closeRequest }) {
  const popupRoot = getPopupRoot();
  const popupWrap = useRef(null);
  const [showIs, setShowIs] = useState(false);
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    // mount 후 한 프레임 뒤에 motion_end 붙여서 등장 모션
    const t = requestAnimationFrame(() => setShowIs(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const requestClose = () => {
    //console.log("requestClose");
    setClosing(true);
    setShowIs(false);
    // popupWrap.current.classList.add(styles.hidden);
  };

  // ✅ 부모에서 closeRequest=true 오면 닫기 모션 시작
  /* useEffect(() => {
    if (closeRequest) requestClose();
  }, [closeRequest]); */

  useEffect(() => {
    if (!closeRequest) return;

    const id = requestAnimationFrame(() => {
      requestClose();
    });

    return () => cancelAnimationFrame(id);
  }, [closeRequest]);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("touchDis", showIs);
    return () => {
      body.classList.remove("touchDis");
    };
  }, [showIs]);

  const handleTransitionEnd = () => {
    // wrap 자체의 transition 끝났을 때만
    // console.log("popup_container TransitionEnd");
    if (closing) {
      popupWrap.current.classList.add("hidden");
      onClose(); // ✅ 모션 끝나고 부모에게 진짜 닫기 요청(언마운트)
    }
  };
  return createPortal(
    <div
      className={["popup_wrap", showIs && "motion_end"]
        .filter(Boolean)
        .join(" ")}
      ref={popupWrap}
    >
      <div className="bg_dim" onClick={requestClose}></div>
      <div className="popup_item" onTransitionEnd={handleTransitionEnd}>
        {title ? (
          <div className="popup_title_row">
            <h3 className="popup_title">{title}</h3>
          </div>
        ) : null}
        <div className="popup_contents">{children}</div>
        <button className="btn_popup_close" onClick={requestClose}>
          닫기
        </button>
      </div>
    </div>,
    popupRoot,
  );
}
