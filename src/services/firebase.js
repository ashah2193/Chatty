import firebase from 'firebase';

const config = {
  apiKey: "FIREBASE_APP_API_KEY",
  authDomain: "FIREBASE_APP_AUTH_DOMAIN",
  databaseURL: "FIREBASE_APP_DATABASE_URL"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();