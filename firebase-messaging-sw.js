// This file must be plain JS, not TS, because service workers don't support ES modules in all browsers
importScripts('https://www.gstatic.com/firebasejs/10.12.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.4/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAKcCWk_hS2I5PRmN6C0DqPc7PIyAsXQxM",
    authDomain: "activity-60d78.firebaseapp.com",
    projectId: "activity-60d78",
    storageBucket: "activity-60d78.firebasestorage.app",
    messagingSenderId: "784214109781",
    appId: "1:784214109781:web:cfcb864780520b4e1a2edc",
    measurementId: "G-77F988Z08Z"
});

const messaging = firebase.messaging();

// Optional: Background message handler
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/ActivityManager/icon.ico' // Adjust if you have an icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});