import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDVYXW7KD054GkOAzHb597yrEZMMxz0aDM',
  authDomain: 'budget-party.firebaseapp.com',
  databaseURL: 'https://budget-party.firebaseio.com',
  storageBucket: 'budget-party.appspot.com',
  messagingSenderId: '784889150023',
}

export const constants = {
  LAST_YEAR: 2016,
}

firebase.initializeApp(config)

export const database = firebase.database()
export const firebaseAuth = firebase.auth
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
