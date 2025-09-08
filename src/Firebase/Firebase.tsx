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
const messaging = getMessaging(application_1);
const vapidKey = import.meta.env.VITE_REACT_APP_FIREBASE_VAP_ID;

export const requestFCMToken = async (): Promise<string> => {
  try {
    const permission = await Notification.requestPermission();
    console.log("Notification permission:", permission);

    if (permission === "granted") {
      const registration = await navigator.serviceWorker.register(
        "/Activity_Manager/firebase-messaging-sw.js"
      );
      const token = await getToken(messaging, {
        vapidKey: vapidKey,
        serviceWorkerRegistration: registration,
      });

      if (!token) {
        throw new Error("FCM token is null. Possible causes: invalid VAPID key, missing Firebase config, or unsupported browser.");
      }

      console.log("FCM Token:", token);
      return token;
    }

    throw new Error("Notification permission not granted");
  } catch (e) {
    console.error("Error in requestFCMToken:", e);
    throw e;
  }
};
