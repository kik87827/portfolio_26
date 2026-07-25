import { useEffect, useRef, useState } from "react";

export default function useHeaderControl() {
  const mobilePanelZone = useRef(null);
  const mobilePanelWrap = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  /*  const mobilePanelZoneCurrent = mobilePanelZone.current;
  const mobilePanelWrapCurrent = mobilePanelWrap.current; */

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("touchDis", isMobileMenuOpen);
    return () => {
      body.classList.remove("touchDis");
    };
  }, [isMobileMenuOpen]);

  const handleMobilePanelOpen = () => {
    let motionTimer = 0;
    const mobilePanelZoneCurrent = mobilePanelZone.current;
    if (!mobilePanelZoneCurrent) {
      return;
    }
    mobilePanelZoneCurrent.classList.add("active");
    motionTimer = setTimeout(() => {
      mobilePanelZoneCurrent.classList.add("motion");
      setIsMobileMenuOpen(true);
    }, 10);
  };
  const handleMobilePanelClose = (e) => {
    let motionTimer = 0;
    const mobilePanelZoneCurrent = mobilePanelZone.current;
    const mobilePanelWrapCurrent = mobilePanelWrap.current;
    if (!mobilePanelZoneCurrent || !mobilePanelWrapCurrent) {
      return;
    }
    // duration
    const d = mobilePanelWrapCurrent
      ? getComputedStyle(mobilePanelWrapCurrent).transitionDuration
      : "0s";
    const durationMs = d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1000;

    mobilePanelZoneCurrent.classList.remove("motion");
    motionTimer = setTimeout(() => {
      mobilePanelZoneCurrent.classList.remove("active");
      setIsMobileMenuOpen(false);
    }, durationMs);
  };

  return {
    mobilePanelZone,
    mobilePanelWrap,
    handleMobilePanelOpen,
    handleMobilePanelClose,
  };
}
