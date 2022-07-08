import firebase from "firebase/app"
import "firebase/auth"

const ap = firebase.initializeApp({
    apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_KEY_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_API_KEY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_KEY_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_KEY_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_KEY_APP_ID
})

export const auth = app.auth()
export default app