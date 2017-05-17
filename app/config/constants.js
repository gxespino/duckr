import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBnBEn9Z74mebvl_pLXUQNSCRjoXnR7tgQ",
  authDomain: "glenn-redux-test-project.firebaseapp.com",
  databaseURL: "https://glenn-redux-test-project.firebaseio.com",
  projectId: "glenn-redux-test-project",
  storageBucket: "glenn-redux-test-project.appspot.com",
  messagingSenderId: "655222327603"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
