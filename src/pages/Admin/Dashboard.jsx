import React, { use, useEffect, useState } from "react";
import { dashboardPages } from "../../constants";
import { Link } from "react-router-dom";
import PWAInstallButton from "../../components/PWAInstallButton";
import axios from "axios";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [subscriptionData, setSubscriptionData] = useState({
    endpoint: "",
    expiexpirationTime: null,
    p256dh: "",
    auth: "",
  });

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

  useEffect(() => {
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
                setSubscriptionData({
                  endpoint: subscription.endpoint,
                  expirationTime: subscription.expirationTime,
                  p256dh: p256dh,
                  auth: auth,
                });
                saveSubscriptionData(subscription.endpoint, p256dh, auth);
              });
            const subscription = await sw.pushManager.getSubscription();
            // if (subscription) {
            //   await subscription.unsubscribe();
            //   console.log("Unsubscribed from push notifications.");
            // }
          });
        } else {
          console.log("Notification permission denied.");
        }
      })
      .catch((error) => {
        console.error("Error requesting notification permission:", error);
      });
  }, []);

  const saveSubscriptionData = async (endpoint, p256dh, auth) => {
    try {
      const { data } = await axios.post(
        `${
          import.meta.env.VITE_API_URI
        }/push-notification/save-subscribers.php?endpoint=${endpoint}&p256dh=${p256dh}&auth=${auth}&user_id=${
          user?.id
        }`
      );
      console.log(data);
    } catch (error) {
      console.error("Error saving subscription data:", error);
    }
  };

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
    </div>
  );
};

export default Dashboard;
