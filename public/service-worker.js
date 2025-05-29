self.addEventListener("push", function (event) {
  const notification = event.data.json();

  event.waitUntil(
    self.registration.showNotification(notification.title, {
      body: notification.body,
      icon: "/logo.png",
      tag: "cafeteria-push",
      renotify: true,
      requireInteraction: true,
      data: {
        notifURL: notification.url,
      },
    })
  );
});

self.addEventListener("notificationclick", function (event) {
  event.waitUntil(clients.openWindow(event.notification.data.notifURL));
});
