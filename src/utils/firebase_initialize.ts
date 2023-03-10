import { initializeApp, getApp } from "firebase/app";
import { initializeAnalytics } from "firebase/analytics";
import { initializePerformance } from "firebase/performance";
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  getToken,
} from "firebase/app-check";

import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { firebaseConfig } from "./config";

//Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// initialize firebase analytics
initializeAnalytics(firebaseApp);
// initialize firebase performance
initializePerformance(firebaseApp);
// initialize firebase AppCheck
const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider("6LeamkkhAAAAAP-kJWb6x7WLKwudjozrMPKsgYDW"),
  isTokenAutoRefreshEnabled: true,
});
// firebase instances
const firebaseFirestore = getFirestore();
const firebaseDatabase = getDatabase();
const firebaseAuth = getAuth();
const firebaseStorage = getStorage();
const firebaseFunctions = getFunctions(getApp());
const getAppCheckToken = getToken(appCheck, true);
// use firebase emulators on development
if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(firebaseAuth, "http://192.168.1.2:9099", {
    disableWarnings: true,
  });
  connectFirestoreEmulator(firebaseFirestore, "192.168.1.2", 8080);
  connectDatabaseEmulator(firebaseDatabase, "192.168.1.2", 9000);
  connectStorageEmulator(firebaseStorage, "192.168.1.2", 9199);
  connectFunctionsEmulator(firebaseFunctions, "192.168.1.2", 5001);
}

export {
  firebaseApp,
  firebaseFirestore,
  firebaseAuth,
  firebaseDatabase,
  firebaseStorage,
  firebaseFunctions,
  getAppCheckToken,
};
