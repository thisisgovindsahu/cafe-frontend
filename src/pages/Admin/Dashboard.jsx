import React, { use, useEffect, useRef, useState } from "react";
import { dashboardPages } from "../../constants";
import { Link } from "react-router-dom";
import PWAInstallButton from "../../components/PWAInstallButton";
import axios from "axios";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const endpointRef = useRef();
  const p256dhRef = useRef();
  const authRef = useRef();

  const enableNoficRef = useRef();

  const vapidPublicKey =
    "BIVb3sLkxxgz9PqNYogz7kmE-VTYvF3rgkrliFtaQmMDs_vf_NbZP-HEQrmXkfFDEXKAM18Th7uU36rZ_J9lhBw";

  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  const subscribeUser = async () => {
    Notification.requestPermission()
      .then(function (permission) {
        if (permission === "granted") {
          navigator.serviceWorker.ready.then(async (sw) => {
            sw.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: vapidPublicKey,
              })
              .then((subscription) => {
                const p256dh = btoa(
                  String.fromCharCode.apply(
                    null,
                    new Uint8Array(subscription.getKey("p256dh"))
                  )
                );
                const auth = btoa(
                  String.fromCharCode.apply(
                    null,
                    new Uint8Array(subscription.getKey("auth"))
                  )
                );
                endpointRef.current.innerText = subscription.endpoint;
                p256dhRef.current.innerText = p256dh;
                authRef.current.innerText = auth;
                saveSubscriptionData(subscription.endpoint, p256dh, auth);
              });
            const subscription = await sw.pushManager.getSubscription();
            if (subscription) {
              enableNoficRef.current.style.display = "none";
              endpointRef.current.style.display = "none";
              authRef.current.style.display = "none";
              p256dhRef.current.style.display = "none";
            }
          });
        } else {
          console.log("Notification permission denied.");
        }
      })
      .catch((error) => {
        console.error("Error requesting notification permission:", error);
      });
  };

  const saveSubscriptionData = async (endpoint, p256dh, auth) => {
    try {
      const url = `${
        import.meta.env.VITE_API_URI
      }/push-notification/save-subscribers.php?endpoint=${encodeURIComponent(
        endpoint
      )}&p256dh=${encodeURIComponent(p256dh)}&auth=${encodeURIComponent(
        auth
      )}&user_id=${user?.id}`;
      const { data } = await axios.post(url);
      console.log(data);
    } catch (error) {
      console.error("Error saving subscription data:", error);
    }
  };

  useEffect(() => {
    if (user) {
      subscribeUser();
    }
  }, []);

  return !user ? (
    <>
      <h1 id="dashboard-page" className="text-2xl">
        You are not authorized to visit this page!
      </h1>
    </>
  ) : (
    <div id="dashboard-page">
      <div className="dashboard z-2">
        <h1 className="text-3xl">Admin Panel</h1>
        <main className="main-content">
          <h1>
            Welcome <span id="name">{user?.name}</span> to the Admin Dashboard
          </h1>
          <ul className="dashboard-links">
            {dashboardPages?.map((page, i) => (
              <Link key={i} to={page.path}>
                {page.name}
              </Link>
            ))}
          </ul>
        </main>
      </div>
      <PWAInstallButton />
      <div ref={enableNoficRef} id="enable-notification">
        <button
          onClick={() => {
            subscribeUser();
          }}>
          Enable Notification
        </button>
      </div>
      <div className="user-info">
        <p ref={endpointRef}>endpoint</p>
        <p ref={p256dhRef}>p256dh</p>
        <p ref={authRef}>auth</p>
      </div>
    </div>
  );
};

export default Dashboard;
