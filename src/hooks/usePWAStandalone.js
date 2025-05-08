// src/hooks/usePWAStandalone.js
import { useState, useEffect } from "react";

const usePWAStandalone = () => {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // For iOS detection
    const isIos = /iphone|ipad|ipod/.test(
      window.navigator.userAgent.toLowerCase()
    );
    const isInStandaloneMode =
      "standalone" in window.navigator && window.navigator.standalone;

    // For Android/other PWA detection
    const isStandaloneMode = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;

    setIsStandalone(isStandaloneMode || (isIos && isInStandaloneMode));
  }, []);

  return isStandalone;
};

export default usePWAStandalone;
