import { useState, useEffect } from "react";

const PWAInstallButton = ({ setShowPOPUp }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isInstalledCheck = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    setIsInstalled(isInstalledCheck);

    // Listen for our custom event
    const handleAvailable = () => {
      setDeferredPrompt(window.deferredPromptGlobal);
    };

    window.addEventListener("pwa-install-available", handleAvailable);

    // If the event fired before component mounted
    if (window.deferredPromptGlobal) {
      setDeferredPrompt(window.deferredPromptGlobal);
    }

    // Listen for appinstalled
    const handleAppInstalled = () => setIsInstalled(true);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("pwa-install-available", handleAvailable);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted install");
    }

    setDeferredPrompt(null);
    window.deferredPromptGlobal = null;
    setShowPOPUp(false);
  };

  if (isInstalled || !deferredPrompt) return null;

  return (
    <button className="pwa-install-button" onClick={handleInstallClick}>
      📲 Install App
    </button>
  );
};

export default PWAInstallButton;
