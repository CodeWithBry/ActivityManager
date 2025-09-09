import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";

export let mess = () => console.log(import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY)

const firebaseConfig_1 = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
};

const application_1 = initializeApp(firebaseConfig_1);
export const firestore = getFirestore(application_1);
export const auth = getAuth(application_1);
const vapidKey = import.meta.env.VITE_REACT_APP_FIREBASE_VAP_ID;

const messaging = getMessaging(application_1);

export const requestFCMToken = async (): Promise<string> => {
  if (!('Notification' in window)) {
    throw new Error('Notifications are not supported in this browser.');
  }

  const currentPermission = Notification.permission;
  console.log("Current permission:", currentPermission);

  if (currentPermission === 'denied') {
    throw new Error('Notification permission was denied. Please enable notifications in browser settings.');
  }

  if (currentPermission !== 'granted') {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      throw new Error('Notification permission not granted by user.');
    }
  }

  console.log("Registering Service Worker...");
  const registration = await navigator.serviceWorker.register('/ActivityManager/firebase-messaging-sw.js');

  console.log("Getting FCM token...");
  const token = await getToken(messaging, {
    vapidKey,
    serviceWorkerRegistration: registration,
  });

  console.log(token)
  if (!token) throw new Error('Failed to retrieve FCM token.');
  return token;
};
