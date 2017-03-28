import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDnT7O9yt45FGCNMyi_8G8ndYs2_mqqw1I",
  authDomain: "capmetro-a4e1f.firebaseapp.com",
  databaseURL: "https://capmetro-a4e1f.firebaseio.com",
  storageBucket: "capmetro-a4e1f.appspot.com",
  messagingSenderId: "615069100604"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
